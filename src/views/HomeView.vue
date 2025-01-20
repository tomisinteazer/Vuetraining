<template>
  <section>
    <!-- <h1>Hello Vue {{ username }}</h1> -->

    <section class="text-zinc-400 bg-zinc-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="item in goods" :key="item">
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

            <button class="bg-teal-500 px-8 py-2 text-black rounded my-4 font-bold"
              @click="addToCart(item)">Buy</button>
          </div>

        </div>



        <button class="bg-blue-500 px-8 py-4 text-black rounded my-4 font-bold" @click="checkCart()">Checkout <span
            class="bg-red-600 p-2 text-white rounded-xl">{{ cart.length }}</span></button>

      </div>




    </section>


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

            <button class="bg-rose-800 px-8 py-2 text-black rounded my-4 font-bold"
              @click="remove(item)">remove</button>
          </div>

        </div>



        <button class="bg-green-500 px-8 py-4 text-black rounded my-4 font-bold" @click="checkout()">Checkout </button>
        <br>

        <router-link :to="{ name: 'about', params: { cart: this.cart } }">

          <button class="bg-blue-500 px-8 py-4 text-black rounded my-4 font-bold">Payment </button>

        </router-link>

        <br>

        <router-link :to="{ name: 'user', state: { name: this.username } }">

          <button class="bg-red-600 px-8 py-4 text-black rounded my-4 font-bold">Get User </button>

        </router-link>

      </div>















    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: "Lone Wolf",
      bio: "A big bad angry werewolf in a giant forest.",
      color: ["red", "blue", "white", "yellow"],
      goods: [


        {
          image: "https://www.edelholzverkauf.de/images/product_images/popup_images/39928_1.jpg.webp",
          category: "sex toys",
          name: "Vibra Max",
          price: 300

        },

        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/DesertEagle_50AE.jpg/640px-DesertEagle_50AE.jpg",
          category: "weapon",
          name: "Desert Eagle",
          price: 1400

        },

        {
          image: "https://www.esports.net/wp-content/uploads/2024/03/ak117-COD-Mobile.jpg",
          category: "weapon",
          name: "assault rifle",
          price: 2000

        },



      ],
      cart: []
    };
  },
  methods: {
    addToCart(item) {

      this.cart.push(item)

    },
    checkout() {

      localStorage.setItem("cart", JSON.stringify([...this.cart]))

    },
    checkCart() {
      console.log([...this.cart])

    },

    remove(item) {

      this.cart.pop(item);

    }


  }
};
</script>

<style>
.red {
  color: rgb(255, 82, 82)
}

.blue {
  color: rgb(68, 130, 255);
}

.white {
  color: rgb(255, 246, 235);
}

.yellow {
  color: rgb(255, 221, 50)
}
</style>