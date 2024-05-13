import { defineStore } from 'pinia'
export const useCategories = defineStore('categories', {

    state:()=>({
        products:[]
    }),
    getters:{
        getProducts:(state)=>state.products,
    },
    actions:{
       async fetchProductsCategory(page){
            const {data,status,error}=await useAsyncData('product' ,()=> $fetch('https://fakestoreapi.com/products' , {
                query:{
                    page:Number(page)
                }
            }))
           this.products = data.value

           if (error.value){
               console.log(error.value)
           }
        }
    }




})