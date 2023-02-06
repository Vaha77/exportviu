<template>
  <main>
   <my-header></my-header>
   <my-carousel :images="store.slider" ></my-carousel>
   <my-card ></my-card>
   <my-modal></my-modal>
   
  </main>
</template>


<script setup>
import myHeader from '@/components/myHeader.vue';
import myCarousel from '@/components/myCarousel.vue';
import myCard from '@/components/myCard.vue';
import myModal from '../components/myModal.vue';
import { useProductsStore } from '../stores/products';
import { onMounted } from 'vue';
const store = useProductsStore();

onMounted(async() => store.getImages("api/products"))

</script>
 

<style>

</style>