<template>
    <section class="">
        <section class="text-zinc-700  my-4  body-font">
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
                                class="inline-flex items-center justify-center px-4 py-4 rounded-full border border-transparent bg-zinc-950 shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-zinc-950 data-disabled:opacity-40 data-hover:bg-zinc-900"
                                router :to="'/store'">Get started</button>

                        </router-link>


                        <router-link
                            class="relative inline-flex items-center font-bold  justify-center px-4 py-4 rounded-full border border-transparent bg-white/15 ring-1 shadow-md ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] text-base whitespace-nowrap text-zinc-950 data-disabled:bg-white/15 data-disabled:opacity-40 data-hover:bg-white/20"
                            to="/store">Our Collection</router-link>
                    </div>

                </div>
                <div class="md:w-1/3 w-full">



                    <svg viewBox="0 0 655 680" fill="none"
                        class="h-full object-cover wiggler object-center rounded scale-120">
                        <g clip-path="url(#:S1:-clip)" class="group">
                            <g
                                class="origin-center scale-100 transition duration-700 motion-safe:group-hover:scale-105">
                                <foreignObject width="655" height="680"><img alt="" loading="lazy" width="2400"
                                        height="3000" decoding="async" data-nimg="1"
                                        class="w-full bg-neutral-100 object-cover grayscale delay-200  transition duration-700 ease-in-out hover:grayscale-0"
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


        <section class="text-zinc-400 bg-zinc-950 my-16 body-font">
            <div class="container mx-auto  border border-zinc-700 rounded-3xl py-12">


                <div class=" flex flex-wrap   my-12 mx-auto items-center justify-evenly">
                    <div class="flex flex-col md:w-1/3 md:pl-12 p-8">

                        <div class=" md:text-left text-center">

                            <h2 class="text-xs text-green-500 tracking-widest font-medium title-font mb-1">HOW IT
                                WORKS

                            </h2>
                            <h1 class="md:text-3xl text-2xl font-medium title-font text-white">How we get your
                                products
                                to
                                you.



                            </h1>

                            <p class="my-4">
                                We have partnered with the best delivery services to ensure that your products
                                get to you in the best condition and in the shortest time possible.
                            </p>



                        </div>

                    </div>
                    <div
                        class="flex md:flex-row flex-col items-center flex-shrink-0  p-4 rounded-xl bg-gradient-to-bl from-green-200 from-18% via-green-600 via-75% to-green-800 to-100%  md:space-x-4">
                        <p class="text-zinc-950 font-bold uppercase text-xl">Coming soon</p>
                        <button
                            class="bg-zinc-900 inline-flex py-3 px-5 my-2 rounded-lg items-center hover:bg-zinc-700 hover:bg-opacity-50 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6"
                                viewBox="0 0 512 512">
                                <path
                                    d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z">
                                </path>
                            </svg>
                            <span class="ml-4 flex items-start flex-col leading-none">
                                <span class="text-xs text-zinc-500 mb-1">GET IT ON</span>
                                <span class="title-font font-medium">Google Play</span>
                            </span>
                        </button>
                        <button
                            class="bg-zinc-900 inline-flex py-3 px-5 rounded-lg items-center hover:bg-zinc-700 hover:bg-opacity-50 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6"
                                viewBox="0 0 305 305">
                                <path
                                    d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z">
                                </path>
                                <path
                                    d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z">
                                </path>
                            </svg>
                            <span class="ml-4 flex items-start flex-col leading-none">
                                <span class="text-xs text-zinc-500 mb-1">Download on the</span>
                                <span class="title-font font-medium">App Store</span>
                            </span>
                        </button>
                    </div>

                </div>

                <!-- step1 -->

                <div class=" flex flex-wrap border-t border-zinc-800 px-5 my-16 mx-auto items-center justify-evenly">
                    <div class="flex flex-col md:w-1/3 md:pl-12 p-8">

                        <svg viewBox="0 0 719 680" fill="none" class="h-full">
                            <g clip-path="url(#:S2:-clip)" class="group">
                                <g
                                    class="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                                    <foreignObject width="719" height="680"><img alt="" loading="lazy" width="2400"
                                            height="3000" decoding="async" data-nimg="1"
                                            class="w-full bg-neutral-100 object-cover"
                                            sizes="(min-width: 1024px) 41rem, 31rem"
                                            src="https://thecollectorscircle.com/wp-content/uploads/2022/01/Ferrari-LaFerrari-in-White-1.jpg"
                                            style="color: transparent; aspect-ratio: 719 / 680;"></foreignObject>
                                </g>
                                <use href="#:S2:-shape" stroke-width="2" class="stroke-neutral-950/10"></use>
                            </g>
                            <defs>
                                <clipPath id=":S2:-clip">
                                    <path id=":S2:-shape"
                                        d="M89.827 9.245A11.5 11.5 0 0 1 101.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 138.87 151H75.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Zm-64 321A11.5 11.5 0 0 1 37.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 472H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM526.795 470a15.999 15.999 0 0 0-15.689 12.862l-32.032 160.159c-4.3 21.502-23.18 36.979-45.107 36.979H115.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C177.096 91.477 195.975 76 217.902 76h318.465c29.028 0 50.8 26.557 45.107 55.021l-33.768 168.841c-1.98 9.901 5.592 19.138 15.689 19.138h17.075l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 644.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 311H623c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 554.87 470h-28.075Z"
                                        fill-rule="evenodd" clip-rule="evenodd"></path>
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <div class="md:w-1/2 md:pr-12 md:py-8  md:mb-0 mb-10 pb-10">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white"> Sign up with us your
                            account is waiting.
                        </h1>
                        <p class="leading-relaxed text-base">Setting up your account allows you to track
                            your orders in real time, save your favorite items, and securely store your payment and
                            shipping details for faster checkouts. It also gives you access to exclusive discounts,
                            personalized recommendations, and early notifications about sales and new arrivals.
                            Additionally, having an account enables you to manage returns easily, review your purchase
                            history, and enjoy a seamless, tailored shopping experience.</p>
                        <a class="text-green-400 inline-flex items-center mt-4">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>

                </div>

                <!-- step2 -->

                <div
                    class=" flex flex-wrap border-t border-b border-zinc-800 py-20  px-5 my-16 mx-auto items-center justify-evenly">

                    <div class="md:w-5/12 md:pr-12 md:py-8  md:mb-0 mb-10 pb-10">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white"> Discover the best
                            products for you.
                        </h1>
                        <p class="leading-relaxed text-base">
                            Our team of experts has curated a selection of the best products from around the world to
                            suit your needs and preferences. Whether you're looking for the latest fashion trends, the
                            most innovative gadgets, or the most effective beauty products, we've got you covered. With
                            our easy-to-use search and filter tools, you can find exactly what you're looking for in no
                            time. Plus, our personalized recommendations will help you discover new products that you'll
                            love.
                        </p>
                        <a class="text-green-400 inline-flex items-center mt-4">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="flex flex-col md:w-1/3 md:pl-12 p-8">

                        <svg viewBox="0 0 719 680" fill="none" class="h-full">
                            <g clip-path="url(#:S3:-clip)" class="group">
                                <g
                                    class="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                                    <foreignObject width="719" height="680"><img loading="lazy" width="2400"
                                            height="1600" decoding="async" data-nimg="1"
                                            class="w-full bg-neutral-100 object-cover"
                                            sizes="(min-width: 1024px) 41rem, 31rem"
                                            src="https://cdn.motor1.com/images/mgl/g40OZP/s1/1x1/2015-porsche-918-spyder.webp"
                                            alt="https://all-andorra.com/wp-content/uploads/2019/07/Porsche-991-GT3-RS-white.jpg"
                                            style="color: transparent; aspect-ratio: 719 / 680; transform: scaleX(-1);">
                                    </foreignObject>
                                </g>
                                <use href="#:S3:-shape" stroke-width="2" class="stroke-neutral-950/10"></use>
                            </g>
                            <defs>
                                <clipPath id=":S3:-clip">
                                    <path id=":S3:-shape"
                                        d="M632.827 9.245A11.5 11.5 0 0 1 644.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-95.832 479.159c-4.3 21.502-23.18 36.979-45.107 36.979H178.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C240.096 91.477 258.975 76 280.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm0 479A11.5 11.5 0 0 1 644.104 479h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 630h-63.366c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM37.104 159a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C-1.196 303.361 4.247 310 11.504 310H74.87a11.5 11.5 0 0 0 11.277-9.245l24.76-123.798a.03.03 0 0 1 .052-.012c.015.021.048.012.052-.014C114.016 158.98 120.134 151 143 151h58.87a11.5 11.5 0 0 0 11.277-9.245l25.6-128C240.17 6.64 234.727 0 227.47 0h-63.366a11.5 11.5 0 0 0-11.277 9.245l-24.754 123.771c-.002.011-.016.015-.024.006-.007-.009-.021-.005-.023.007-3.469 18.452-13.551 25.107-24.88 25.981-.848.065-1.699 0-2.549-.009l-.127-.001H37.104Z"
                                        fill-rule="evenodd" clip-rule="evenodd"></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                </div>

                <!-- step3 -->


                <div class=" flex flex-wrap  px-5 my-16 mx-auto items-center justify-evenly">
                    <div class="flex flex-col md:w-1/3 md:pl-12 p-8">

                        <svg viewBox="0 0 719 680" fill="none" class="h-full">
                            <g clip-path="url(#:S2:-clip)" class="group">
                                <g
                                    class="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                                    <foreignObject width="719" height="680"><img alt="" loading="lazy" width="2400"
                                            height="3000" decoding="async" data-nimg="1"
                                            class="w-full bg-neutral-100 object-cover"
                                            sizes="(min-width: 1024px) 41rem, 31rem"
                                            src="https://i.pinimg.com/736x/ab/f3/8b/abf38b897d24dbe761efcbcc5df1237e.jpg"
                                            style="color: transparent; aspect-ratio: 719 / 680;"></foreignObject>
                                </g>
                                <use href="#:S2:-shape" stroke-width="2" class="stroke-neutral-950/10"></use>
                            </g>
                            <defs>
                                <clipPath id=":S2:-clip">
                                    <path id=":S2:-shape"
                                        d="M89.827 9.245A11.5 11.5 0 0 1 101.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 138.87 151H75.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Zm-64 321A11.5 11.5 0 0 1 37.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 472H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM526.795 470a15.999 15.999 0 0 0-15.689 12.862l-32.032 160.159c-4.3 21.502-23.18 36.979-45.107 36.979H115.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C177.096 91.477 195.975 76 217.902 76h318.465c29.028 0 50.8 26.557 45.107 55.021l-33.768 168.841c-1.98 9.901 5.592 19.138 15.689 19.138h17.075l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 644.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 311H623c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 554.87 470h-28.075Z"
                                        fill-rule="evenodd" clip-rule="evenodd"></path>
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <div class="md:w-1/2 md:pr-12 md:py-8  md:mb-0 mb-10 pb-10">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">

                            Add products to your cart.


                        </h1>
                        <p class="leading-relaxed text-base">
                            Once you've found the products you want, simply add them to your cart by clicking the [Add
                            to
                            Cart] button. You can add multiple items to your cart and adjust the quantity as needed.
                            When
                            you're ready to check out, click the shopping cart icon in the top right corner of the page
                            to
                            review your order. From there, you can proceed to checkout, where you'll enter your shipping
                            and payment information. Once your order is confirmed, you'll receive an email with your
                            order
                            details and tracking information.

                        </p>
                        <a class="text-green-400 inline-flex items-center mt-4">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>

                </div>

                <!-- step4 -->

                <div
                    class=" flex flex-wrap border-t border-zinc-800 py-20  px-5 mt-16 mx-auto items-center justify-evenly">

                    <div class="md:w-5/12 md:pr-12 md:py-8  md:mb-0 mb-10 pb-10">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">

                            Blockchain empowered checkout.
                        </h1>
                        <p class="leading-relaxed text-base">
                            Our blockchain-powered checkout process ensures that your transactions are secure and
                            transparent. By using blockchain technology, we can verify the authenticity of each
                            transaction and ensure that your payment information is protected. This technology also
                            enables us to offer faster processing times and lower fees, so you can enjoy a seamless
                            shopping experience without any hidden costs. Plus, with blockchain, you can track your
                            order in real time and see exactly where your products are at all times.
                        </p>
                        <a class="text-green-400 inline-flex items-center mt-4">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="flex flex-col md:w-1/3 md:pl-12 p-8">

                        <svg viewBox="0 0 719 680" fill="none" class="h-full">
                            <g clip-path="url(#:S3:-clip)" class="group">
                                <g
                                    class="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                                    <foreignObject width="719" height="680"><img alt="" loading="lazy" width="2400"
                                            height="1600" decoding="async" data-nimg="1"
                                            class="w-full bg-neutral-100 object-cover"
                                            sizes="(min-width: 1024px) 41rem, 31rem"
                                            src="https://imgd.aeplcdn.com/1056x594/n/pu7b6sa_1475175.jpg?q=80"
                                            style="color: transparent; aspect-ratio: 719 / 680;"></foreignObject>
                                </g>
                                <use href="#:S3:-shape" stroke-width="2" class="stroke-neutral-950/10"></use>
                            </g>
                            <defs>
                                <clipPath id=":S3:-clip">
                                    <path id=":S3:-shape"
                                        d="M632.827 9.245A11.5 11.5 0 0 1 644.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-95.832 479.159c-4.3 21.502-23.18 36.979-45.107 36.979H178.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C240.096 91.477 258.975 76 280.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm0 479A11.5 11.5 0 0 1 644.104 479h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 630h-63.366c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM37.104 159a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C-1.196 303.361 4.247 310 11.504 310H74.87a11.5 11.5 0 0 0 11.277-9.245l24.76-123.798a.03.03 0 0 1 .052-.012c.015.021.048.012.052-.014C114.016 158.98 120.134 151 143 151h58.87a11.5 11.5 0 0 0 11.277-9.245l25.6-128C240.17 6.64 234.727 0 227.47 0h-63.366a11.5 11.5 0 0 0-11.277 9.245l-24.754 123.771c-.002.011-.016.015-.024.006-.007-.009-.021-.005-.023.007-3.469 18.452-13.551 25.107-24.88 25.981-.848.065-1.699 0-2.549-.009l-.127-.001H37.104Z"
                                        fill-rule="evenodd" clip-rule="evenodd"></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                </div>
            </div>
        </section>

        <section class="text-zinc-400 my-4 body-font">
            <div class="container  mx-auto">
                <div class="flex flex-wrap mx-auto justify-evenly text-center">

                    <div class="p-4 md:w-1/6 sm:w-1/3 w-full flex justify-evenly">
                        <div
                            class=" bg-gradient-to-br from-green-100 from-10% via-green-200 via-30% to-green-400 to-90% rounded-full flex h-20 w-20 p-2 ">
                            <img src="/src/assets/img/heroshe.svg " class="grayscale">

                        </div>

                    </div>
                    <div class=" p-4 md:w-1/6 sm:w-1/3 w-full flex justify-evenly">
                        <div
                            class=" bg-gradient-to-br from-green-200 from-10% via-green-300 via-30% to-green-500 to-90% rounded-full flex h-20 w-20 p-2 ">
                            <img src="/src/assets/img/dhl-1.svg " class="grayscale">

                        </div>

                    </div>
                    <div class="p-4 md:w-1/6 sm:w-1/3 w-full flex justify-evenly">
                        <div
                            class=" bg-gradient-to-br from-green-300 from-10% via-green-400 via-30% to-green-600 to-90% rounded-full flex h-20 w-20 p-2 ">
                            <img src="/src/assets/img/FedEx_Express.svg " class="grayscale">

                        </div>

                    </div>
                    <div class="p-4 md:w-1/6 sm:w-1/3 w-full flex justify-evenly">
                        <div
                            class=" bg-gradient-to-br from-green-400 from-10% via-green-500 via-30% to-green-600 to-90% rounded-full flex h-20 w-20 p-2 ">
                            <img src="/src/assets/img/amazon.svg " class="grayscale">

                        </div>

                    </div>
                    <div class="p-4 md:w-1/6 sm:w-1/3 w-full flex justify-evenly">
                        <div
                            class=" bg-gradient-to-br from-green-500 from-10% via-green-600 via-30% to-green-700 to-90% rounded-full flex h-20 w-20 p-2 ">
                            <img src="/src/assets/img/ups.svg " class="grayscale">

                        </div>

                    </div>


                </div>
            </div>
        </section>




    </section>
</template>

<script>



//--tw-gradient-via-stops #fff1be 28%, #ee87cb 70%, #b060ff 100% 

</script>

<style>
.wiggler {
    animation: wiggle 5s ease-in-out 5;


}

.loveyImg {

    object-fit: cover;
    clip-path: path('M213.1,6.7c-32.4-14.4-73.7,0-88.1,30.6C110.6,4.9,67.5-9.5,36.9,6.7C2.8,22.9-13.4,62.4,13.5,110.9 C33.3,145.1,67.5,170.3,125,217c59.3-46.7,93.5-71.9,111.5-106.1C263.4,64.2,247.2,22.9,213.1,6.7z');
    margin: 0;
}


@keyframes wiggle {

    0%,



    100% {
        /* transform: rotate(-2deg) scale(1.05); */
        transform: translateY(0em);


    }


    50% {

        transform: translateY(2rem)
            /* transform: rotate(2deg) scale(1.15); */
    }








}
</style>
