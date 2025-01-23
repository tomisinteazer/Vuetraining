<template>

  <section>


    <navigationbar :title="siteName" />
    <RouterView />
  </section>









</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';


export default {


  data() {
    return {

      siteName: "Sambisa",

    }
  },

  components: {
    navigationbar: Navbar
  }
}

</script>