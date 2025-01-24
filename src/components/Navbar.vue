<template>


    <section class="lg:sticky lg:top-1 z-10">
        <header class="text-zinc-400 bg-zinc-900 body-font my-4  w-full ">
            <div class="p-2 container mx-auto border border-zinc-600 rounded-xl">
                <div class="bg-zinc-800 rounded mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <router-link to="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0  px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2"
                            class="w-10 h-10 text-white p-2 bg-green-600 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="px-2 text-2xl">{{ title.toUpperCase() }}.</span>
                    </router-link>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <!-- <router-link to="/" class="mr-5 hover:text-white">Home </router-link> -->
                        <router-link to="/store" class="mr-5 hover:text-white">Store</router-link>
                        <router-link to="/about" class="mr-5 hover:text-white">About</router-link>
                        <router-link to="/users" class="mr-5 hover:text-white">Users</router-link>
                    </nav>
                    <router-link to="/checkout"> <button
                            class="inline-flex items-center bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-amber-500 hover:text-zinc-900 rounded text-white mt-4 md:mt-0">Cart
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </router-link>
                </div>
            </div>
        </header>
    </section>

</template>

<script>

export default {

    props: {
        title: String
    }


}
</script>

<style></style>