<template>
    <section class="flex md:flex-row flex-col container mx-auto ">


        <section class="md:w-3/4 w-full px-2">
            <div class="space-y-10 text-white rounded-lg p-5 border border-zinc-700">

                <h1 class="py-8 lg:text-3xl text-xl px-4 rounded-xl bg-zinc-900 font-thin">
                    <p> Checkout ✤&nbsp</p>
                    <p> Total : [
                        ${{ store.totalPrice }}
                        ]
                    </p>
                </h1>


                <div class="space-y-5">
                    <p
                        class="MuiTypography-root MuiTypography-body1 text-sm font-semibold tracking-wider uppercase text-primary css-1vbkxh1">
                        Billing details</p>
                    <div class="grid gap-5 md:grid-cols-2">
                        <div class="space-y-[5px]"><label
                                class="text-sm font-semibold tracking-wide capitalize">name</label><input type="text"
                                class="block w-full p-3 border-zinc-500 rounded-lg focus:outline-green-600 focus:outline-1 border "
                                placeholder="Delasi Mensah"></div>
                        <div class="space-y-[5px]"><label class="text-sm font-semibold tracking-wide capitalize">email
                                address</label><input type="email"
                                class="block w-full p-3 border-zinc-500 rounded-lg focus:outline-green-600 focus:outline-1 border"
                                placeholder="delasi@mail.com"></div>
                        <div class="space-y-[5px]"><label class="text-sm font-semibold tracking-wide capitalize">phone
                                number</label><input type="tel"
                                class="block w-full p-3 border-zinc-500 rounded-lg focus:outline-green-600 focus:outline-1 border"
                                placeholder="+1 202-555-0136"></div>
                    </div>
                </div>
                <div class="space-y-5">
                    <p
                        class="MuiTypography-root MuiTypography-body1 text-sm font-semibold tracking-wider uppercase text-primary css-1vbkxh1">
                        Shipping info</p>
                    <div class="space-y-[5px]"><label
                            class="text-sm font-semibold tracking-wide capitalize">address</label><input type="text"
                            class="block w-full p-3 border-zinc-500 rounded-lg focus:outline-green-600 focus:outline-1 border"
                            placeholder="1137 Williams Avenue"></div>
                    <div class="grid gap-5 md:grid-cols-2">
                        <div class="space-y-[5px]"><label class="text-sm font-semibold tracking-wide capitalize">ZIP
                                Code</label><input type="number"
                                class="block w-full p-3 border-zinc-500 rounded-lg focus:outline-green-600 focus:outline-1 border"
                                placeholder="10001"></div>
                        <div class="space-y-[5px]"><label
                                class="text-sm font-semibold tracking-wide capitalize">city</label><input type="text"
                                class="block w-full p-3 border-zinc-500 rounded-lg focus:outline-green-600 focus:outline-1 border"
                                placeholder="New York"></div>
                        <div class="space-y-[5px]"><label
                                class="text-sm font-semibold tracking-wide capitalize">country</label><input type="text"
                                class="block w-full p-3 border-zinc-500 rounded-lg focus:outline-green-600 focus:outline-1 border"
                                placeholder="United States"></div>
                    </div>
                </div>

            </div>
        </section>

        <!-- 
        <section class="text-zinc-400 body-font relative">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon
                        brooklyn asymmetrical gentrify.</p>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-zinc-400">Name</label>
                                <input type="text" id="name" name="name"
                                    class="w-full bg-zinc-800 bg-opacity-40 rounded border border-zinc-700 focus:border-green-500 focus:bg-zinc-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-zinc-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-zinc-400">Email</label>
                                <input type="email" id="email" name="email"
                                    class="w-full bg-zinc-800 bg-opacity-40 rounded border border-zinc-700 focus:border-green-500 focus:bg-zinc-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-zinc-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-zinc-400">Message</label>
                                <textarea id="message" name="message"
                                    class="w-full bg-zinc-800 bg-opacity-40 rounded border border-zinc-700 focus:border-green-500 focus:bg-zinc-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-zinc-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button
                                class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
                        </div>
                        <div class="p-2 w-full pt-8 mt-8 border-t border-zinc-800 text-center">
                            <a class="text-green-400">example@email.com</a>
                            <p class="leading-normal my-5">49 Smith St.
                                <br>Saint Cloud, MN 56301
                            </p>
                            <span class="inline-flex">
                                <a class="text-zinc-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a class="ml-4 text-zinc-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="ml-4 text-zinc-500">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a class="ml-4 text-zinc-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                        </path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <section class="text-zinc-100  body-font md:w-1/4 w-full px-2">
            <div class="container p-4 mx-auto border border-zinc-700 rounded-xl ">

                <h1 class="py-4 lg:text-xl text-xl   px-4 rounded-xl  bg-green-900/20  font-thin">
                    [ Clear your Cart. ]
                </h1>
                <div class="flex flex-wrap  ">
                    <div class="w-full px-2 my-4" v-for="(item, index) in store.cart" :key="item.id">


                        <div class="bg-zinc-900 p-4 rounded-lg">
                            <a class="block relative h-24 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                    :src="item.images.main" />
                            </a>

                            <div class="mt-4 flex justify-between items-center">

                                <h2 class=" title-font text-lg font-medium">
                                    {{ item.make + ' ' + item.model + ' ' + item.year }}
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


                                <button class="w-full bg-black py-3 border border-red-700  rounded-sm"
                                    @click="store.removeItem(item.id)">
                                    Remove Item</button>
                            </div>
                        </div>


                    </div>

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
