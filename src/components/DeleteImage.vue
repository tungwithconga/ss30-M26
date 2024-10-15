<template>
    <div>
      <input type="text" v-model="imageName" placeholder="Tên ảnh cần xóa" />
      <button @click="deleteImage">Xóa</button>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { getStorage, ref as storageRef, deleteObject } from 'firebase/storage';
  import { storage } from '../firebaseConfig';
  
  const imageName = ref('');
  const message = ref('');
  
  const deleteImage = async () => {
    if (!imageName.value) return;
  
    const fileRef = storageRef(storage, `images/${imageName.value}`);
    try {
      await deleteObject(fileRef);
      message.value = 'Xóa thành công!';
    } catch (error) {
      message.value = 'Xóa thất bại!';
    }
  };
  </script>
  