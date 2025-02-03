<template>
    <section>








        <!-- <h1>Hello Vue {{ username }}</h1> -->

        <section>
            <div class="container mx-auto ">
                <div class="flex w-full items-end justify-center">
                    <div class="relative  text-left md:w-full lg:w-full xl:w-3/4"><label for="hero-field"
                            class="pl-3 text-sm leading-7 text-green-600"> Search Products
                        </label><input type="text"
                            class="w-full rounded-lg border border-zinc-600 bg-zinc-800 bg-opacity-50 py-2 px-3 text-base leading-8 text-zinc-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-600 focus:bg-black focus:ring-1 focus:ring-green-600">
                    </div>
                </div>

            </div>
        </section>


        <transition name="fade">
            <div v-if="isModalVisible">
                <div @click="onToggle"
                    class="ixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
                </div>
                <div class="w-full  p-3 relative  rounded-xl shadow-lg  z-50">
                    <section class="text-zinc-400  body-font overflow-hidden my-8">
                        <div class="container px-5  border border-zinc-700 rounded-3xl py-24 mx-auto">
                            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                                <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                    <h2 class="text-sm title-font text-zinc-500 tracking-widest">SoundTech</h2>
                                    <h1 class="text-white text-3xl title-font font-medium mb-4">Wireless Noise-Canceling
                                        Headphones
                                    </h1>
                                    <div class="flex mb-4">
                                        <span class="flex items-center">
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-green-400"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                                </path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-green-400"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                                </path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-green-400"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                                </path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-green-400"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                                </path>
                                            </svg>
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-green-400"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                                </path>
                                            </svg>
                                            <span class="ml-3">4 Reviews</span>
                                        </span>

                                    </div>
                                    <div class="flex mb-4">
                                        <button @click="review = false"
                                            class=" text-left flex-grow text-green-400 py-2 text-lg px-1"
                                            :class="review ? 'border-b-2 border-zinc-800' : 'border-green-500 border-b-2 '">Description</button>
                                        <button @click="review = true"
                                            :class="review ? 'border-green-500 border-b-2 ' : 'border-b-2 border-zinc-800'"
                                            class="text-left flex-grow  py-2 text-lg px-1">Reviews</button>

                                    </div>
                                    <div v-if="!review">
                                        <p class="leading-relaxed mb-4">High-quality over-ear headphones with active
                                            noise-canceling
                                            technology, 30-hour battery life, and Bluetooth connectivity.</p>
                                        <div class="flex border-t border-zinc-800 py-2">
                                            <span class="text-zinc-500">Color</span>
                                            <span class="ml-auto text-white">Blue</span>
                                        </div>
                                        <div class="flex border-t border-zinc-800 py-2"
                                            v-for=" (value, key) in specifications" :key="value">
                                            <span class="text-zinc-500">{{ key }}</span>
                                            <span class="ml-auto text-white">{{ value }}</span>
                                        </div>



                                        <div class="flex border-t border-b mb-6 border-zinc-800 py-2">
                                            <span class="text-zinc-500">Quantity</span>
                                            <span class="ml-auto text-white">4</span>
                                        </div>
                                        <div class="flex">
                                            <span class="title-font font-medium text-2xl text-white">$58.00</span>
                                            <button
                                                class="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Add
                                                to Cart</button>
                                            <button
                                                class="rounded-full w-10 h-10 bg-zinc-800 p-0 border-0 inline-flex items-center justify-center  text-zinc-500 ml-4"
                                                @click="onToggle">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path
                                                        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <img alt="ecommerce"
                                    class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl"
                                    src="https://media.wired.com/photos/6014a6587201ff6c1ba30bcb/master/pass/Gear-Apple-Airpods-Max-Angle-SOURCE-Apple.jpg">
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </transition>

        <section class="text-zinc-300 bg-zinc-950 body-font my-12">
            <div class="container p-4 border rounded-xl border-zinc-700 mx-auto">
                <h1 class="py-8 lg:text-3xl text-xl   px-4 rounded-xl  bg-zinc-900  font-thin">
                    [ Products ◉ Goods ◉ Services ]
                </h1>
                <div class="flex flex-wrap ">
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="(item, index) in goods.products" :key="item">
                        <a class="block relative h-48 rounded overflow-hidden" @click="onToggle">
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
            cart: [],
            review: false,
            specifications: {
                color: "Black",
                weight: "250g",
                batteryLife: "30 hours",
                connectivity: "Bluetooth 5.0"
            },
            isOpen: true
        };
    },
    computed: {
        isModalVisible() {
            return this.isOpen;
        }
    },
    methods: {
        onToggle() {
            this.isOpen = !this.isOpen;
        }
    }
};
</script>

<style>
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 500ms ease-out;
}
</style>