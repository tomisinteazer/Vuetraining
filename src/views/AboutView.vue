<template>
  <div class="about">

    <section class="text-zinc-400 bg-zinc-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="item in cart" :key="item">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="item.image" />
            </a>
            <div class="mt-4">
              <h3 class="text-zinc-500 text-xs tracking-widest title-font mb-1">
                {{ item.category }}
              </h3>
              <h2 class=" title-font text-lg font-medium" :class="item">
                {{ item.name }}
              </h2>
              <p class="mt-1">${{ item.price }}</p>
            </div>
          </div>
        </div>
        <button class="bg-blue-500 px-8 py-4  rounded my-4 font-bold text-white" @click="pay">Payment
        </button>
      </div>

    </section>
  </div>
</template>


<script>

export default {





  data: () => ({


    cart: []



  }),
  methods: {
    getCart() {
      this.cart = JSON.parse(localStorage.getItem("cart"))
    },
    pay() {
      alert("gbewa")
    }
  },

  mounted() {
    this.getCart()
  },

}

</script>
