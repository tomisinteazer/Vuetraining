<template>
    <section>
        <section class="text-zinc-100  body-font my-12 ">
            <div class="container p-4 mx-auto border border-zinc-600 rounded-xl ">

                <h1 class="py-8 text-5xl   px-4 rounded-xl  bg-green-600  font-thin">
                    Cart
                </h1>
                <div class="flex flex-wrap  ">
                    <div class="lg:w-3/12 md:w-1/2 w-full px-2 my-4" v-for="(item, index) in store.cart" :key="item">


                        <div class="bg-zinc-800 p-4 rounded-lg">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                    :src="item.image" />
                            </a>
                            <div class="mt-4">

                                <h2 class=" title-font text-lg font-medium" :class="item">
                                    {{ item.name }} <span class=" px-4">${{ item.price }}</span>

                                    <button class="bg-rose-800  p-4 text-white font-light rounded-full "
                                        @click="store.remove(index)">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg></button>
                                </h2>

                            </div>
                        </div>


                    </div>

                </div>

                <h1 class=" text-white text-4xl bg-green-600 p-4 text-center rounded font-thin w-1/3 my-4"> Checkout [
                    ${{ store.total }}
                    ]
                </h1>

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
