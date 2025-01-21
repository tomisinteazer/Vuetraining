<template>


    <section>
        <header class="text-zinc-400 bg-zinc-900 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2"
                        class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl">{{ title }} </span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <router-link to="/" class="mr-5 hover:text-white">Home </router-link>
                    <router-link to="/store" class="mr-5 hover:text-white">Store</router-link>
                    <router-link to="/about" class="mr-5 hover:text-white">About</router-link>
                    <router-link to="/contact" class="mr-5 hover:text-white">Contact</router-link>
                </nav>
                <router-link to="/checkout"> <button
                        class="inline-flex items-center bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-zinc-700 rounded text-white mt-4 md:mt-0">Cart
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button></router-link>
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