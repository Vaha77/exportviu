import { ref, computed, onMounted } from 'vue';
import { defineStore } from 'pinia';
import {useQuery} from "vue-query";
import axios from '../axios';

export const useProductsStore = defineStore('products', {
state: () => ({
 slider:[],
 products:[],
 product:{},
 showModal:false
}), 

 
getters: () => {
 return this.products;
},

actions: {
async getProducts(url) {
    let data = await axios.get(url);
   return this.products = data.data.result;
  },

async getProduct(url) {
  let data = await axios.get(url);
  this.showModal = true;
  return this.product = data.data.result;
},

async getImages(url) {
  let data = await axios.get(url)
  if(Array.isArray(data.data.result)) {
  data.data.result.forEach(item => {
     this.slider.push(item.images[0]);
    })
  }


}

}


});
