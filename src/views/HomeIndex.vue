<template>
    <section class="">
        <section class="text-zinc-600   body-font">
            <div
                class="container mx-auto bg-gradient-to-br from-green-200 from-18% via-green-600 via-75% to-green-800 to-100%  rounded-3xl flex px-5 py-24 md:flex-row flex-col  justify-evenly items-center">
                <div
                    class=" md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1
                        class="font-display text-6xl font-thin tracking-tight text-balance text-zinc-950 sm:text-6xl md:text-7xl my-4">
                        SOL✤STORE.
                    </h1>
                    <h1
                        class="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-zinc-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
                        Shop Easy.</h1>
                    <p class="mt-8 max-w-lg text-xl/7 font-medium text-zinc-950/90 sm:text-2xl/8">Checkout our offering
                        of premium products, timeless elegance, and a seamless shopping experience.</p>

                    <div class="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">




                        <router-link to="/store">
                            <button
                                class="inline-flex items-center justify-center px-4 py-4 rounded-full border border-transparent bg-zinc-950 shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-zinc-950 data-disabled:opacity-40 data-hover:bg-zinc-800"
                                router :to="'/store'">Get started</button>

                        </router-link>


                        <router-link
                            class="relative inline-flex items-center font-bold  justify-center px-4 py-4 rounded-full border border-transparent bg-white/15 ring-1 shadow-md ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] text-base whitespace-nowrap text-zinc-950 data-disabled:bg-white/15 data-disabled:opacity-40 data-hover:bg-white/20"
                            to="/store">Our Collection</router-link>
                    </div>

                </div>
                <div class="md:w-1/3 w-full">



                    <svg viewBox="0 0 655 680" fill="none" class="h-full object-cover object-center rounded scale-120">
                        <g clip-path="url(#:S1:-clip)" class="group">
                            <g
                                class="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                                <foreignObject width="655" height="680"><img alt="" loading="lazy" width="2400"
                                        height="3000" decoding="async" data-nimg="1"
                                        class="w-full bg-neutral-100 object-cover"
                                        sizes="(min-width: 1024px) 41rem, 31rem" srcset=""
                                        src="/src/assets/img/porsche.jpeg"
                                        style="color: transparent; aspect-ratio: 655 / 680;"></foreignObject>
                            </g>
                            <use href="#:S1:-shape" stroke-width="2" class="stroke-neutral-950/10"></use>
                        </g>
                        <defs>
                            <clipPath id=":S1:-clip">
                                <path id=":S1:-shape"
                                    d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                                    fill-rule="evenodd" clip-rule="evenodd"></path>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>




    </section>
</template>

<script>
import router from '@/router';


//--tw-gradient-via-stops #fff1be 28%, #ee87cb 70%, #b060ff 100% 

</script>

<style></style>
