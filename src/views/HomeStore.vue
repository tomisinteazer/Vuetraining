<template>
    <section>








        <!-- <h1>Hello Vue {{ username }}</h1> -->

        <section class="text-zinc-300 bg-zinc-950 body-font my-12">
            <div class="container p-4 border rounded-xl border-zinc-700 mx-auto">

                <h1 class="py-8 lg:text-3xl text-xl   px-4 rounded-xl  bg-zinc-900  font-thin">
                    [ Products ◉ Goods ◉ Services ]
                </h1>
                <div class="flex flex-wrap ">
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="(item, index) in goods.products" :key="item">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                :src="item.image" />
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

                        <button class="bg-green-600 px-8 py-2 text-black rounded my-4 font-bold"
                            @click="store.addToCart(item)">Buy</button>
                    </div>

                </div>


                <div>

                </div>





            </div>




        </section>


        <section class="text-zinc-100  body-font ">
            <div class="container p-4 mx-auto border border-zinc-700 rounded-xl ">

                <h1 class="py-8 lg:text-3xl text-xl   px-4 rounded-xl  bg-zinc-900  font-thin">
                    [ Your premium selections. ]
                </h1>
                <div class="flex flex-wrap  ">
                    <div class="lg:w-3/12 md:w-1/2 w-full px-2 my-4" v-for="(item, index) in store.cart" :key="item">


                        <div class="bg-zinc-900 p-4 rounded-lg">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                    :src="item.image" />
                            </a>
                            <div class="mt-4 flex justify-between items-center">

                                <h2 class=" title-font text-lg font-medium">
                                    {{ item.name }}
                                </h2>
                                <span class=" ">${{ item.price }}</span>

                                <button class="bg-rose-800  p-4 text-white font-light rounded-full "
                                    @click="store.remove(index)">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg></button>

                            </div>
                        </div>


                    </div>

                </div>


                <div
                    class="lg:flex 
                    justify-betweeen  text-white lg:text-4xl text-2xl bg-green-600/50 p-4 text-center rounded font-thin lg:w-1/3 w-full my-4">
                    <p> Checkout ✤&nbsp</p>
                    <p>
                        [
                        ${{ store.total }}
                        ]
                    </p>
                </div>




            </div>















        </section>



    </section>
</template>

<script>

import { useCartStore } from '@/stores/cart';
import { useProductsStore } from '@/stores/products';

export default {



    data() {
        return {

            store: useCartStore(),
            username: "Lone Wolf",
            bio: "A big bad angry werewolf in a giant forest.",
            color: ["red", "blue", "white", "yellow"],
            goods: useProductsStore(),
            cart: []
        };
    },



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