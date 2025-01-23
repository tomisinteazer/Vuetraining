import { defineStore } from "pinia";

// define store from pinia is a function that has already been written by pinia devs we make use of that for free

export let useUsersStore = defineStore( "usersStore",{
   state:()=>({
    
    users :[],
    loading:false,
    error:null

})
   ,
   getters:{
   highestPayingClient(){

    return this.users.reduce((a,c)=>{
        if (a.balance < c.balance){
            return c
        }
        return a
    },this.users[0])

    }
   },
   actions:{
    async fetchUsers() {
      let finalData = [];
      this.loading= true
      try {
          const response = await fetch('https://vuetraining-users.tomisinteazer.workers.dev/')
          // Replace with your API URL
          if (!response.ok) {
              console.log('Failed to fetch users.', data);
          }
          finalData = await response.json();
          // Set the users data
      } catch (error) {
          console.log(error.message)
      } finally {
          this.users= finalData.users;
          this.loading=false;

      }
  }
}
   



})