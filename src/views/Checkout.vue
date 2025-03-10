<template>
    <section>
        <section class="text-zinc-100  body-font my-12 ">
            <div class="container p-4 mx-auto border border-zinc-700 rounded-xl ">

                <h1 class="py-8 lg:text-3xl text-xl   px-4 rounded-xl  bg-green-900/20  font-thin">
                    [ Clear your Cart. ]
                </h1>
                <div class="flex flex-wrap  ">
                    <div class="lg:w-3/12 md:w-1/2 w-full px-2 my-4" v-for="(item, index) in store.cart" :key="item.id">


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



                            </div>
                            <div class="mt-4 flex  items-center">

                                <button class="bg-green-800  py-2 px-6 text-white rounded  text-2xl  font-black mr-2"
                                    @click="store.addItem(item)">
                                    +
                                </button>


                                <span class=" ">{{ item.quantity }}</span>

                                <button class="bg-rose-800  py-2 px-6 text-white font-black text-2xl  rounded  mx-2"
                                    @click="store.removeOneItem(item.id)">
                                    −
                                </button>

                            </div>

                            <div>
                                <button class="w-full bg-black py-4 mt-2 rounded-sm" @click="store.removeItem(item.id)">
                                    Remove Item</button>
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
                        ${{ store.totalPrice }}
                        ]
                    </p>
                </div>

            </div>

        </section>
    </section>
</template>

<script>
import { useCartStore } from '@/stores/cart';
export default {
    data() {
        return {

            store: useCartStore(),
        };
    },
};
</script>
