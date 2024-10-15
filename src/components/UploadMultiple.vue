<template>
    <div>
      <input type="file" multiple @change="uploadFiles" />
      <ul>
        <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
  import { storage } from '../firebaseConfig';
  
  const messages = ref([]);
  const uploadFiles = async (event) => {
    const files = event.target.files;
    if (!files.length) return;
  
    for (let i = 0; i < files.length; i++) {
      const fileRef = storageRef(storage, `images/${files[i].name}`);
      try {
        await uploadBytes(fileRef, files[i]);
        messages.value.push(`${files[i].name} đã upload thành công!`);
      } catch (error) {
        messages.value.push(`${files[i].name} upload thất bại!`);
      }
    }
  };
  </script>
  