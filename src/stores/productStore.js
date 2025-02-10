import { defineStore } from "pinia";

export let useProductStore = defineStore("productStore", {
    state(){
        return{
            product:{},
            loading:false,
        }
    },
    actions:{
        async fetchProduct() {
            let finalData;
            this.loading =  true
            try {

                //usually you should use an id to fetch a single product
                const response = await fetch('https://vuetraining-singleproduct.tomisinteazer.workers.dev')
                if (!response.ok) {
                    console.log('Failed to fetch data.');
                }
                finalData = await response.json();
            } catch (error) {
                console.error("the error is ",error.message)

            } finally {
             this.product = finalData
             this.loading = false
         
            }
        }
    }
})