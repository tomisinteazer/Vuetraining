<template>


    <section class="lg:sticky lg:top-1 z-10">
        <header class="text-zinc-400 bg-zinc-950 body-font my-4  w-full ">
            <div class="p-2 container mx-auto border border-zinc-700 rounded-xl">
                <div class="bg-zinc-900 rounded mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <router-link to="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0  px-4">
                        <span class=" text-green-500 font-bold text-2xl p-2 rounded-lg">{{ title.toUpperCase()
                        }}</span>

                    </router-link>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <!-- <router-link to="/" class="mr-5 hover:text-white">Home </router-link> -->
                        <router-link to="/store" class="mr-5 hover:text-white">Store</router-link>
                        <router-link to="/about" class="mr-5 hover:text-white">About</router-link>
                        <router-link to="/users" class="mr-5 hover:text-white">Team</router-link>
                    </nav>

                    <div class="flex md:hidden"><button type="button"
                            class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
                            aria-label="toggle menu"><svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                <path fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg></button></div>
                    <router-link to="/checkout"> <button
                            class="inline-flex items-center  bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-amber-500 hover:text-zinc-950 rounded text-white mt-4 md:mt-0">

                            <span class="text-white rounded-full bg-zinc-950 px-3 py-1" v-if="store.cart.length">{{
                                store.cart.length }}</span>
                            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.83179 4.38657H3.34341C4.20256 4.38657 4.96125 4.94691 5.21392 5.76808L8.27786 15.7259C8.53053 16.547 9.28921 17.1074 10.1484 17.1074H17.1114C17.9373 17.1074 18.6743 16.5889 18.9534 15.8116L20.9925 10.1312C21.679 8.21867 20.2616 6.20383 18.2295 6.20383H10.66"
                                    stroke="#ffffff" stroke-width="1.7" stroke-linecap="round" />
                                <circle cx="10.1707" cy="20.5322" r="1.46779" fill="#ffffff" />
                                <circle cx="17.0204" cy="20.5322" r="1.46779" fill="#ffffff" />
                            </svg>


                        </button>
                    </router-link>
                </div>
            </div>
        </header>
    </section>

</template>

<script>

import { useCartStore } from '@/stores/cart';

export default {

    props: {
        title: String
    },
    data() {
        return {
            store: useCartStore()
        }
    },


}
</script>

<style></style>