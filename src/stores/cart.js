import { defineStore } from "pinia";

export const useCartStore = defineStore("carStore" ,{
    state : ()=>(
        {
            cart:[]
         ,
        }  
    ),
    getters:{
        total(){
            return this.cart.reduce((a,e)=>{
                return a + e.price
            },0)
              
    
        
            
    }}
})