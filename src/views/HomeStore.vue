<template>
    <section>








        <!-- <h1>Hello Vue {{ username }}</h1> -->

        <section>
            <div class="container mx-auto ">
                <div class="flex w-full items-end justify-center">
                    <div class="relative  text-left md:w-full lg:w-full xl:w-3/4"><label for="hero-field"
                            class="pl-3 text-sm leading-7 text-green-600"> Search Products
                        </label><input type="text"
                            class="w-full rounded-lg border border-zinc-600 bg-zinc-900 bg-opacity-50 py-2 px-3 text-base leading-8 text-zinc-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-600 focus:bg-black focus:ring-1 focus:ring-green-600">
                    </div>
                </div>

            </div>
        </section>



        <section class="text-zinc-300 bg-zinc-950 body-font my-12">
            <div class="container p-4 border rounded-xl border-zinc-700 mx-auto">
                <h1 class="py-8 lg:text-3xl text-xl   px-4 rounded-xl  bg-zinc-900  font-thin">
                    [ Products ◉ Goods ◉ Services ]
                </h1>
                <div class="flex flex-wrap ">
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="(item, index) in goods.products" :key="item.id">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                @click="loadModal()" :src="item.images.main" />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-zinc-500 text-xs tracking-widest title-font mb-1">
                                {{ item.category }}
                            </h3>
                            <h2 class=" title-font text-lg font-medium" :class="item">
                                {{ item.make + ' ' + item.model + ' ' + item.year }}
                            </h2>
                            <p class="mt-1">${{ item.price }}</p>
                        </div>

                        <button
                            class="hover:bg-green-600  border border-zinc-500  hover:border-black hover:text-black px-8 py-2 w-1/2 text-white rounded my-4 active:scale-75 active:bg-transparent font-bold hover:w-full transition-all duration-200 ease-in-out "
                            @click="store.addItem({ ...item, id: item.id ? item.id : index })">

                            <span>Add to cart</span>



                        </button>

                    </div>



                </div>


                <div>

                </div>





                <!-- <Ripplebutton> well hello there</Ripplebutton> -->
            </div>




        </section>

        <!-- <section class="text-zinc-100  body-font ">
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















        </section> -->

        <Modal />


    </section>
</template>

<script>

import { useModalStore } from '@/stores/modalStore';
import Modal from '../components/Modal.vue';
import { useCartStore } from '@/stores/cart';
import { useProductsStore } from '@/stores/products';
import { useProductStore } from '@/stores/productStore';
import Ripplebutton from '@/components/Ripplebutton.vue';

export default {


    data() {
        return {

            store: useCartStore(),
            product: useProductStore(),
            username: "Lone Wolf",
            bio: "A big bad angry werewolf in a giant forest.",
            color: ["red", "blue", "white", "yellow"],
            goods: useProductsStore(),
            cart: [],
            modal: useModalStore(),
            review: false,
            isOpen: true,
            ripples: []
        };
    },

    components: {
        Modal,
        Ripplebutton
    },
    computed: {
        isModalVisible() {
            return this.isOpen;
        }
    },
    methods: {

        createRipple(event) {
            const button = event.currentTarget;
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            const id = Date.now();

            this.ripples.push({ id, x, y, size });

            setTimeout(() => {
                this.ripples = this.ripples.filter(r => r.id !== id);
            }, 600);
        },
        onToggle() {
            this.isOpen = !this.isOpen;
        },
        loadModal() {
            this.product.fetchProduct()
            this.modal.openModal()

        }
    }
};
</script>

<style>
@keyframes ripple {
    from {
        transform: scale(0);
        opacity: 0.5;
    }

    to {
        transform: scale(4);
        opacity: 0;
    }
}

.animate-ripple {
    position: absolute;
    transform: scale(0);
    animation: ripple 0.6s linear;
}
</style>