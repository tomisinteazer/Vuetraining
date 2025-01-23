<template>
    <section>


        <section class="text-zinc-400 bg-zinc-900 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-col">
                <div class="flex justify-center items-center">
                    <h1
                        class="py-8 text-5xl align-center justify-center text-zinc-800 w-1/2  my-4 px-4 rounded-xl text-center bg-amber-400  font-thin">
                        Top Contributor.
                    </h1>
                </div>


                <div class="lg:w-4/6 mx-auto">

                    <div class="flex flex-col sm:flex-row mt-10">
                        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div class="w-20 h-20 rounded-full inline-flex  justify-center bg-zinc-800 text-zinc-600">
                                <img alt="team"
                                    class="h-20 bg-zinc-100 object-cover object-center flex-shrink-0 rounded-full"
                                    :src="store.highestPayingClient.profileImage">
                            </div>
                            <div class="flex flex-col items-center text-center justify-center">
                                <h2 class="font-medium title-font mt-4 text-white text-lg">{{
                                    store.highestPayingClient.username
                                }}</h2>
                                <div class="w-12 h-1 bg-amber-500  rounded mt-2 mb-4"></div>
                                <p class="p-4 w-8/12 font-thin rounded border border-zinc-600 border-dashed text-white">
                                    {{
                                        store.highestPayingClient.bio }}</p>
                            </div>
                        </div>
                        <div
                            class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-zinc-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p class="leading-relaxed text-lg mb-4"> We want to express our deepest gratitude for your
                                invaluable support and trust in our services. Your unwavering commitment has been
                                instrumental in our growth and success, and we are incredibly thankful to have you as
                                one of our top clients.

                            <div class="my-4"></div>

                            We remain dedicated to providing you with the highest level of service and innovation to
                            meet your needs. Your feedback and continued partnership inspire us to strive for
                            excellence every day.
                            <div class="my-4"></div>

                            Thank you once again for your loyalty and trust. We look forward to serving you for many
                            more successful years to come..
                            </p>
                            <router-link to="/store" class="text-blue-400 inline-flex items-center"> Support us
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="text-zinc-400 bg-zinc-900 body-font">
            <div class="container px-5 py-24 mx-auto">

                <h1 class="py-8 text-5xl  my-4 px-4 rounded-xl  text-white  bg-blue-500/50  font-thin">
                    Contributors
                </h1>

                <div class="flex flex-wrap -m-2">
                    <div class="p-2 lg:w-1/4 md:w-1/2 w-full" v-for="(user, i) in store.users" :key="i">
                        <div class="h-full flex items-center border-zinc-600 bg-zinc-800/50 border p-4 rounded-lg">
                            <img alt="team"
                                class="w-16 h-16 bg-zinc-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                :src="user.profileImage">
                            <div class="w-1 h-12 bg-blue-500 rounded mr-4"></div>
                            <div class="flex-grow">
                                <h2 class="text-white title-font font-medium">{{ user.username }}</h2>
                                <p class="text-zinc-600">{{ user.bio }}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


    </section>
</template>

<script>
import { useUsersStore } from '@/stores/users';

export default {
    data() {
        return {
            store: useUsersStore()
        }
    }
}

</script>

<style></style>