<template>
   <div>
    <img :src="imageUrl" alt="">
    <input @change = "handleGetFile" type="file">
    <button @click="handleUpload">Upload</button>
    <button @click="handleSubmit">Submit</button>
   </div>
</template>

<script setup>
import { storage } from '@/firebase';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';

import { ref } from 'vue';


const imageUrl = ref("");
const file = ref(null);
const downloadUrl = ref("");
//Lấy giá trị trong ô input type file và priview hình ảnh
const handleGetFile = (e) =>{
    imageUrl.value = URL.createObjectURL(e.target.files[0]);
    file.value = e.target.files[0];
};
//Lưu hình ảnh lên firebase storage 
const handleUpload = async () =>{
    if(!file){
        alert("Chưa có file được chọn");
    }else{
        try {
             const storageReference = storageRef(storage,`images/${file.value.name}`);
             //Lưu hình ảnh trên firebase
             await uploadBytes(storageReference,file.value);
             downloadUrl.value = await getDownloadURL(storageReference);
        } catch (error) {
            console.log(error);
        }
       
    }
}
const handleSubmit=() => {
    console.log("Image url",downloadUrl.value);
}
</script>

<style>

</style>