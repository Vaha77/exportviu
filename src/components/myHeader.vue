<template>
  <header>
    <div class="logo">
      <img class="logo" src="@/assets/logo.svg" alt="">
    </div>

    <!-- <div class="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="search...">
      </div>
       -->
      
      <div class="categries">
        <button v-for="(item, i) in categries" :key="i">{{ item }}</button>
      </div>
  </header>
</template>

<script setup>
import { ref } from "vue"
import barBtn from "./barBtn.vue";

const categries = ref(["Exkvator","Automobil","Zapchastlar"]);


</script>

<style>

header {
    width:100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
}

header .logo {
    display: flex;
    justify-content: space-evenly;
}

header .logo img {
    width: 300px;
}

header .logo .bar-btn {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap:10px; 
   background-color: blue;
   width: 40px;
   height: 40px;
   border-radius: 3px;
}

header .logo .bar-btn div {
    width: 80%;
    height: 3px;
    background: white;
}

header .search {
    width: 350px;
    height:40px;
    border:1px solid black;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
    padding:0 15px;
}

header .search i {
    position: absolute;
}

header .search input {
    width: 100%;
    height: 100%;
    padding: 0 10px 0 30px;
    border: none;
    outline: none;
}

header .categries {
    display: flex;
    gap:10px;
}

header .categries button {
    padding: 10px 20px;
    border: 1px solid gray;
    background-color: transparent;

}



@media (min-width:320px) and (max-width:667px) {
header .logo img {
    width: 100px;
}
header .search {
    display: none;
} 

header .categries button {
    font-size: 8px;
    padding: 5px;
}

}
</style>