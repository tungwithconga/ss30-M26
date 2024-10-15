<template>
  <div>
    <UploadFile></UploadFile>
    <UploadMultiple></UploadMultiple>
    <DeleteImage></DeleteImage>
    <ListImages></ListImages>
    <UploadPDF></UploadPDF>
    
  </div>
</template>

<script setup>
import UploadFile from "./components/UploadFile.vue";
import UploadMultiple from "./components/UploadMultiple.vue";
import DeleteImage from "./components/DeleteImage.vue";
import ListImages from "./components/ListImages.vue";
import UploadPDF from "./components/UploadPDF.vue";
</script>

<style>

</style>