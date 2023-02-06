<template>
  <div class="slider-box">
    <button class="prev-btn" @click="prevBtn"><i class="fa-solid fa-angle-left"></i></button>
    <div class="slider" :style="'--size:'+images.length+'00%; --num:'+-num+'00%'">
      <div class="slide" v-for="item in images" :key="item">
        <img :src="item">
      </div>
    </div>
    <button class="next-btn" @click="nextBtn"><i class="fa-solid fa-angle-right"></i></button>
  </div>

</template>


<script setup>
import { onMounted, ref, defineProps } from "vue";
const props = defineProps(['images'])

const num = ref(0);

const nextBtn = () => {
   if(num.value < props.images.length-1) {
     num.value++
   } else {
    num.value = 0;
   }
}

const prevBtn = () => {
  if(num.value > 0) {
    num.value--;
  }else{
    num.value = props.images.length-1;
  }
}

</script>


<style scoped>

.slider-box {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  
}

.slider-box button {
  border: none;
  padding: 20px;
  background-color: black;
  color: white;
}
.slider-box .prev-btn {
  padding: 10px;
  position: absolute;
  left: 10px;
  top:50%;
  transform: translate(0%, -50%);
}

.slider-box .next-btn {
  padding: 10px;
  position: absolute;
  right:10px;
  top:50%;
  transform: translate(0%, -50%);
}

.slider-box .slider {
  width:var(--size);
  height: 100%;
  display: flex;
  margin-left:var(--num);
  transition: all 1s;

}



.slider-box .slider .slide {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-box .slider .slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>