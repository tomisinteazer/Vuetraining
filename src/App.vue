<template>

  <section>


    <navigationbar :title="siteName" />
    <RouterView />
  </section>









</template>

<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { useUsersStore } from './stores/users';
import { useProductsStore } from './stores/products';
import { onBeforeMount, onMounted } from 'vue';


export default {

  setup() {


    const productsStore = useProductsStore()
    const usersStore = useUsersStore()


    onBeforeMount(() => {
      console.log("Before Mount")
      usersStore.fetchUsers()
      productsStore.fetchProducts()
    })



    return { productsStore, usersStore }





  },
  data() {
    return {

      siteName: "Sol✤store",

    }
  },

  components: {
    navigationbar: Navbar
  },
  mounted() {


  }
}

</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Space+Grotesk:wght@300..700&display=swap');


body {
  font-family: "Space Grotesk", serif;
  font-optical-sizing: auto;

}
</style>
