import { defineStore } from "pinia";

export let useProductsStore = defineStore("productsStore", {
    state(){
        return{
            products:[],
            loading:false,
        }
    },
    actions:{
        async fetchProducts() {
            let finalData = [];
            this.loading =  true
            try {
                const response = await fetch('https://vuetraining-products.tomisinteazer.workers.dev/')
                if (!response.ok) {
                    console.log('Failed to fetch users.', data);
                }
                finalData = await response.json();
                
            } catch (error) {
                console.error("the error is ",error.message)

            } finally {
             this.products = finalData.goods
             this.loading = false
         
            }
        }
    }
})