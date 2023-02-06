<template>
  <div class="card-wrap">
    <div class="card" v-for="item in store.products" :key="item" @click="store.getProduct('api/product-one/'+item._id)">
    <img :src="item.images[0]" alt="">
      <div class="text-wrap">
      <h3>{{ item.name.slice(0,15)+"..." }}</h3>
      <p>{{ item.discription.slice(0,50)+"..." }}</p>
      <p>Narxi: <b>{{ item.price }}</b></p>
    </div>
  </div>
  </div>
  
</template>

<script setup>
import { onMounted} from 'vue';
import { useProductsStore } from '@/stores/products';
import myCarousel from './myCarousel.vue';

const store = useProductsStore();
onMounted(async () => await store.getProducts("api/products?limit=6"))

</script>

<style>

.card-wrap {
  width: 100%;
  background-color: rgb(245, 239, 239);
  padding:20px;
  display: flex;
  flex-wrap: wrap;
  align-items:flex-start;
  justify-content: center;
  gap:30px;  
}



.card {
  width:300px;
  height:350px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap:10px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 50%;
  object-fit:cover;
}

.card .text-wrap {
  display: flex;
  flex-direction: column;
  gap:10px;
  padding:10px;
}


</style>