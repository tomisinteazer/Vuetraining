import { defineStore } from "pinia";

export let useProductStore = defineStore("productStore", {
    state(){
        return{
            product:{},
            loading:false,
        }
    },
    actions:{
        async fetchProducts() {
            let finalData;
            this.loading =  true
            try {
                const response = await fetch('https://vuetraining-singleproduct.tomisinteazer.workers.dev')
                if (!response.ok) {
                    console.log('Failed to fetch data.');
                }
                finalData = await response.json();
            } catch (error) {
                console.error("the error is ",error.message)

            } finally {
             this.products = finalData
             this.loading = false
         
            }
        }
    }
})