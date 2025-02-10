<template>
    <Teleport to="body">

        <Transition name="fade">

            <div v-if="modal.isOpen"
                class="fixed inset-0  bg-zinc-950/70 bg-opacity-50 backdrop-blur-lg flex justify-center items-center z-50">
                <!-- Modal Content -->

                <Transition name="scale">


                    <section class="text-zinc-400 body-font p-8  max-h-[95vh] overflow-y-auto">
                        <div class="container bg-zinc-950 lg:w-4/5 rounded-3xl p-4 mx-auto">
                            <div class="p-5 rounded-xl border border-zinc-600 flex flex-wrap">
                                <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                    <h2 class="text-sm title-font text-zinc-500 tracking-widest">{{
                                        product.product.brand }}</h2>
                                    <h1 class="text-white text-3xl title-font font-medium mb-4">
                                        {{ product.product.name }}
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
                                        <p class="leading-relaxed mb-4">{{ product.product.description }}</p>
                                        <div class="flex border-t border-zinc-800 py-2">
                                            <span class="text-zinc-500">Color</span>
                                            <span class="ml-auto text-white">Blue</span>
                                        </div>
                                        <div class="flex border-t border-zinc-800 py-2"
                                            v-for=" (value, key) in product.product.specifications" :key="value">
                                            <span class="text-zinc-500">{{ key }}</span>
                                            <span class="ml-auto text-white">{{ value }}</span>
                                        </div>



                                        <div class="flex border-t border-b mb-6 border-zinc-800 py-2">
                                            <span class="text-zinc-500">Quantity</span>
                                            <span class="ml-auto text-white">4</span>
                                        </div>
                                        <div class="flex">
                                            <span class="title-font font-medium text-2xl text-white">${{
                                                product.product.price }}</span>
                                            <button
                                                class="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Add
                                                to Cart</button>
                                            <button @click="modal.closeModal"
                                                class="rounded-full w-10 h-10 bg-zinc-800 p-0 border-0 inline-flex items-center justify-center  text-zinc-500 ml-4">
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
                                <img alt="ecommerce" v-if="product.product.images"
                                    class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl"
                                    :src="product.product.images[0]">
                                <img alt="ecommerce" v-if="!product.product.images"
                                    class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl"
                                    src="https://media.wired.com/photos/6014a6587201ff6c1ba30bcb/master/pass/Gear-Apple-Airpods-Max-Angle-SOURCE-Apple.jpg">

                            </div>
                        </div>
                    </section>
                </Transition>
            </div>

        </Transition>
    </Teleport>
</template>

<script>
import { useModalStore } from '@/stores/modalStore';
import { useProductStore } from '@/stores/productStore';

import { ref } from 'vue';

export default {

    setup() {


        const modal = useModalStore();
        const product = useProductStore();
        let review = ref(false);
        let specifications = ref({
            color: "Black",
            weight: "250g",
            batteryLife: "30 hours",
            connectivity: "Bluetooth 5.0"
        });

        return {
            review,
            specifications,
            product,
            modal
        }
    },

}


</script>

<style>
/* Fade transition for the background */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Scale transition for the modal */
.scale-enter-active,
.scale-leave-active {
    transition: transform 7s ease, opacity 7s ease;
}

.scale-enter-from,
.scale-leave-to {
    transform: scale(0.5);
    opacity: 0;
}
</style>