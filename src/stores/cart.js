// import { defineStore } from "pinia";

// export const useCartStore = defineStore("cartStore" ,
//     {
//     state : ()=>(
//         {
//             cart:[]
//         }  
//     ),
//     getters:{
//         total(){
//             return this.cart.reduce((a,e)=>{
//                 return a + e.price
//             },0)
//     }},
//     actions:{
//         remove(i){
//             this.cart.splice(i,1)
//         },
//         addToCart(item){
//             this.cart.push(item)
//         }
//     }

// })


// stores/cartStore.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    // Array of cart cart with id, product info and quantity
  
    cart:[]
  }),
  
  getters: {
    // Total number of cart in cart (including quantities)
    totalcart: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0)
    },
    
    // Total price of all cart in cart
    totalPrice: (state) => {
      return state.cart.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
    },
    
    // Check if a specific product is in the cart
    isInCart: (state) => (productId) => {
      return state.cart.some(item => item.id === productId)
    },
    
    // Get quantity of a specific item in cart
    getItemQuantity: (state) => (productId) => {
      const cartItem = state.cart.find(item => item.id === productId)
      return cartItem ? cartItem.quantity : 0
    }
  },
  
  actions: {
    // Add item to cart (or increase quantity if already in cart)
    addItem(product) {
      const cartItem = this.cart.find(item => item.id === product.id)
      
      if (cartItem) {
        // Item already exists in cart, increase quantity
        cartItem.quantity++
      } else {
        // Add new item to cart with quantity 1
        this.cart.push({
          ...product,
          quantity: 1
        })
      }
      
      // Could add persistence here with localStorage or other storage
      this.saveCart()
    },
    
    // Remove one unit of an item from cart
    removeOneItem(productId) {
      const cartItemIndex = this.cart.findIndex(item => item.id === productId)
      
      if (cartItemIndex !== -1) {
        const cartItem = this.cart[cartItemIndex]
        
        if (cartItem.quantity > 1) {
          // Decrease quantity if more than one
          cartItem.quantity--
        } else {
          // Remove item completely if quantity would be zero
          this.cart.splice(cartItemIndex, 1)
        }
        
        this.saveCart()
      }
    },
    
    // Remove entire item from cart regardless of quantity
    removeItem(productId) {
      const cartItemIndex = this.cart.findIndex(item => item.id === productId)
      
      if (cartItemIndex !== -1) {
        this.cart.splice(cartItemIndex, 1)
        this.saveCart()
      }
    },
    
    // Clear entire cart
    clearCart() {
      this.cart = []
      this.saveCart()
    },
    
    // Update quantity directly (ensuring it's at least 1)
    updateItemQuantity(productId, quantity) {
      const cartItem = this.cart.find(item => item.id === productId)
      
      if (cartItem) {
        cartItem.quantity = Math.max(1, quantity)
        this.saveCart()
      }
    },
    
    // Save cart to localStorage (persistence)
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    
    // Load cart from localStorage (persistence)
    loadCart() {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        this.cart = JSON.parse(savedCart)
      }
    }
  }
})