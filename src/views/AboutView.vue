<template>
  <section class=" bg-zinc-950">
    <!-- Hero Section -->
    <div
      class="relative h-[60vh] p-16 rounded-2xl  border border-zinc-700 flex items-center justify-center text-center container mx-auto">
      <div
        class="absolute inset-0  bg-gradient-to-tr from-black from-25% via-zinc-700 via-75%  to-zinc-800  rounded-2xl ">
      </div>
      <div class="relative px-6">
        <h1 class="text-5xl md:text-6xl my-2 font-bold text-green-500 animate-fade-up">
          The Future of Car Buying
        </h1>
        <p class="text-lg text-zinc-300 mb-12 animate-fade-up delay-200">
          AI-Driven Listings & Blockchain Transactions for Secure and Seamless Purchases
        </p>
        <a class="px-8 py-4 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-600 transition animate-fade-up delay-400"
          href="#features">
          Explore Our Marketplace
        </a>
      </div>
    </div>

    <!-- Container -->
    <div class="container mx-auto p-6 space-y-16 border border-zinc-700 rounded-2xl my-12">

      <!-- Features Section -->


      <div id="features" class="grid md:grid-cols-1 gap-12">

        <div class="animate-fade-in">
          <!-- Bento Grid Layout -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-0">

            <!-- Header Card - Full Width -->
            <div
              class="border border-zinc-800 rounded-xl p-4 md:p-6 shadow-lg col-span-1 md:col-span-2 lg:col-span-4 transform transition hover:-translate-y-1 hover:bg-zinc-900">
              <h1 class="text-xl md:text-2xl font-bold text-green-400 mb-2">Solana Blockchain Payments</h1>
              <p class="text-sm md:text-base text-zinc-400">Ultra-fast and low-cost transactions using the Solana
                blockchain, ensuring
                secure and instant payments.</p>
            </div>

            <!-- How It Works Card -->
            <div
              class="border border-zinc-800 rounded-xl p-4 md:p-6 shadow-lg col-span-1 transform transition hover:-translate-y-1 hover:bg-zinc-900">
              <h2 class="text-lg md:text-xl font-semibold text-green-400 mb-2 md:mb-3">How It Works</h2>
              <p class="text-sm md:text-base text-zinc-400">
                Solana uses a unique <span class="text-green-300 cursor-help" title="Proof of History">PoH</span>
                combined with
                <span class="text-green-300 cursor-help" title="Proof of Stake">PoS</span> to validate transactions,
                enabling thousands of transactions per second with minimal fees.
              </p>
            </div>

            <!-- Performance Stats Card -->
            <div
              class="border border-zinc-800 rounded-xl p-4 md:p-6 shadow-lg col-span-1 transform transition hover:-translate-y-1 hover:bg-zinc-900">
              <div class="text-center py-2">
                <h2 class="text-lg md:text-xl font-semibold text-green-400 mb-2 md:mb-3">Performance</h2>
                <div class="text-3xl md:text-4xl font-bold text-green-400">50,000+</div>
                <div class="text-sm md:text-base text-zinc-400">Transactions Per Second</div>
              </div>
            </div>

            <!-- Cost Card -->
            <div
              class="border border-zinc-800 rounded-xl p-4 md:p-6 shadow-lg col-span-1 transform transition hover:-translate-y-1 hover:bg-zinc-900">
              <div class="text-center py-2">
                <h2 class="text-lg md:text-xl font-semibold text-green-400 mb-2 md:mb-3">Transaction Cost</h2>
                <div class="text-xl md:text-2xl font-bold text-green-400">
                  < $0.01</div>
                    <div class="text-sm md:text-base text-zinc-400">Average Transaction Fee</div>
                </div>
              </div>

              <!-- Eco-Friendly Card -->
              <div
                class="border border-zinc-800 rounded-xl p-4 md:p-6 shadow-lg col-span-1 transform transition hover:-translate-y-1 hover:bg-zinc-900">
                <div class="text-center py-2">
                  <h2 class="text-lg md:text-xl font-semibold text-green-400 mb-2 md:mb-3">Eco-Friendly</h2>
                  <div class="text-2xl md:text-3xl mb-2">♻️</div>
                  <div class="text-sm md:text-base text-zinc-400">More energy efficient than Proof-of-Work blockchains
                  </div>
                </div>
              </div>

              <!-- Advantages Card - Double Width -->
              <div
                class="border border-zinc-800 rounded-xl text-white p-4 md:p-6 shadow-lg col-span-1 md:col-span-2 md:row-span-2 transform transition hover:-translate-y-1 hover:bg-zinc-900">
                <h2 class="text-lg md:text-xl font-semibold text-green-400 mb-3 md:mb-4">Advantages of Solana for
                  Payments</h2>
                <ul class="space-y-2 md:space-y-3">
                  <li class="pl-4 md:pl-5 relative">
                    <div class="absolute left-0 top-1 text-green-400">•</div>
                    <span class="text-green-300 font-medium">Ultra-Fast Transactions:</span> Solana processes
                    <span class="text-green-400">50,000+ TPS</span>, making it much faster than Bitcoin or Ethereum.
                  </li>
                  <li class="pl-4 md:pl-5 relative">
                    <div class="absolute left-0 top-1 text-green-400">•</div>
                    <span class="text-green-300 font-medium">Low Transaction Costs:</span> Fees are fractions of a
                    cent,
                    ideal for <span class="text-green-400">micropayments</span> and frequent transactions.
                  </li>
                  <li class="pl-4 md:pl-5 relative">
                    <div class="absolute left-0 top-1 text-green-400">•</div>
                    <span class="text-green-300 font-medium">Security & Decentralization:</span> Uses cryptographic
                    security and decentralized validators.
                  </li>
                  <li class="pl-4 md:pl-5 relative">
                    <div class="absolute left-0 top-1 text-green-400">•</div>
                    <span class="text-green-300 font-medium">Scalability:</span> Designed to scale without congestion.
                  </li>
                  <li class="pl-4 md:pl-5 relative">
                    <div class="absolute left-0 top-1 text-green-400">•</div>
                    <span class="text-green-300 font-medium">Energy Efficiency:</span> More eco-friendly than
                    Proof-of-Work blockchains.
                  </li>
                </ul>
              </div>

              <!-- Use Cases Cards -->
              <div class="col-span-1 md:col-span-2 grid grid-cols-1 gap-4">
                <!-- E-commerce Card -->
                <div
                  class="border border-zinc-800 rounded-lg p-3 md:p-4 shadow-lg transform transition hover:-translate-y-1 hover:bg-zinc-900">
                  <h3 class="font-medium text-green-300 mb-1 md:mb-2">E-commerce Payments</h3>
                  <p class="text-xs md:text-sm text-zinc-400">Merchants can accept crypto payments with minimal fees.
                  </p>
                </div>

                <!-- Cross-Border Card -->
                <div
                  class="border border-zinc-800 rounded-lg p-3 md:p-4 shadow-lg transform transition hover:-translate-y-1 hover:bg-zinc-900">
                  <h3 class="font-medium text-green-300 mb-1 md:mb-2">Cross-Border Transactions</h3>
                  <p class="text-xs md:text-sm text-zinc-400">Faster and cheaper than traditional banking.</p>
                </div>
              </div>

              <div class="col-span-1 md:col-span-2">
                <div
                  class="bg-green-800 rounded-xl p-4 md:p-6 shadow-lg transform transition hover:-translate-y-1 hover:bg-zinc-900">
                  <p class="text-base md:text-lg font-semibold text-green-100">
                    Solana provides a fast, cost-effective, and scalable way to transfer value securely!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="features" class="grid md:grid-cols-3 -mt-10 gap-12">

          <div class="feature-box animate-fade-in">
            <h2 class="text-2xl text-zinc-300 font-bold py-4">AI-Powered Listings</h2>
            <p class="font-thin text-lg text-zinc-500">
              Our platform uses advanced AI models to generate detailed and accurate descriptions for each car listing.
            </p>
          </div>
          <div class="feature-box animate-fade-in ">
            <h2 class="text-2xl text-zinc-300 font-bold py-4">Instant Receipt Generation</h2>
            <p class="font-thin text-lg text-zinc-500">
              Transaction hashes are securely stored, and buyers receive authenticated receipts for transparent
              transactions.
            </p>
          </div>

          <div class="feature-box animate-fade-in ">
            <h2 class="text-2xl text-zinc-300 font-bold py-4">Dealer Dashboard</h2>
            <p class="font-thin text-lg text-zinc-500">
              Private dashboard access for dealers to track sales history, manage inventory, and monitor transactions.
            </p>
          </div>

          <div class="feature-box animate-fade-in ">
            <h2 class="text-2xl text-zinc-300 font-bold py-4">Verified Car Listings</h2>
            <p class="font-thin text-lg text-zinc-500">
              Every car listing is reviewed and verified to ensure high-quality and trustworthy vehicle options.
            </p>
          </div>

          <div class="feature-box animate-fade-in ">
            <h2 class="text-2xl text-zinc-300 font-bold py-4">Community & Support</h2>
            <p class="font-thin text-lg text-zinc-500">
              Join a growing community of car buyers and dealers, backed by 24/7 customer support for any inquiries.
            </p>
          </div>

          <div class="bg-green-800 rounded-lg p-4">
            <h2 class="text-2xl text-green-100 font-bold py-4">Get started today </h2>
            <p class="font-thin text-lg text-white">
              Join a growing community of car buyers and dealers, backed by 24/7 customer support for any inquiries.
            </p>
          </div>
        </div>













      </div>
      <!-- Call-to-Action -->


  </section>





</template>

<style scoped>
@import "tailwindcss";

.feature-box {
  @apply p-4 border border-zinc-800 rounded-lg shadow-lg transition hover:bg-zinc-900;
}

/* Scroll Animations */
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.animate-fade-up {
  animation: fade-up 1s ease-out;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
