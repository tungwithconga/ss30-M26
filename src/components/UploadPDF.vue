<template>
    <div>
      <input type="file" accept=".pdf" @change="uploadAndRenderPDF" />
      <canvas ref="pdfCanvas"></canvas>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
  import { storage } from '../firebaseConfig';
  import pdfjsLib from 'pdfjs-dist/build/pdf';
  
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;
  
  const pdfCanvas = ref(null);
  const message = ref('');
  
  const uploadAndRenderPDF = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    const fileRef = storageRef(storage, `pdf/${file.name}`);
    try {
      await uploadBytes(fileRef, file);
      message.value = 'Upload thành công!';
      
      const fileURL = URL.createObjectURL(file);
      const pdf = await pdfjsLib.getDocument(fileURL).promise;
      const page = await pdf.getPage(1);
      const context = pdfCanvas.value.getContext('2d');
      const viewport = page.getViewport({ scale: 1.5 });
      pdfCanvas.value.width = viewport.width;
      pdfCanvas.value.height = viewport.height;
      await page.render({ canvasContext: context, viewport }).promise;
    } catch (error) {
      message.value = 'Upload hoặc render thất bại!';
    }
  };
  </script>
  