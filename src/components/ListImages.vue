<template>
    <div>
      <ul>
        <li v-for="(image, index) in images" :key="index">{{ image }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { getStorage, ref as storageRef, listAll } from 'firebase/storage';
  import { storage } from '../firebaseConfig';
  
  const images = ref([]);
  
  const fetchImages = async () => {
    const listRef = storageRef(storage, 'images/');
    try {
      const res = await listAll(listRef);
      images.value = res.items.map(item => item.name);
    } catch (error) {
      console.error('Lấy danh sách ảnh thất bại', error);
    }
  };
  
  onMounted(fetchImages);
  </script>
  