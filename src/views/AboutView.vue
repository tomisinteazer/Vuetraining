<template>
  <section class=" bg-zinc-950">
    <!-- Hero Section -->
    <div class="relative h-[80vh] flex items-center justify-center text-center ">
      <div
        class="absolute inset-0  bg-gradient-to-tr from-black from-25% via-zinc-700 via-75%  to-zinc-800 container mx-auto rounded-2xl border border-zinc-700">
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
    <div class="container mx-auto p-6 space-y-16 border border-zinc-700 rounded-xl  my-12">

      <!-- Features Section -->
      <div id="features" class="grid md:grid-cols-3 gap-12">

        <div class="feature-box animate-fade-in">
          <h2 class="text-2xl text-zinc-300 font-bold py-4">AI-Powered Listings</h2>
          <p class="font-thin text-xl text-zinc-500">
            Our platform uses advanced AI models to generate detailed and accurate descriptions for each car listing.
          </p>
        </div>

        <div class="feature-box animate-fade-in ">
          <h2 class="text-2xl text-zinc-300 font-bold py-4">Solana Blockchain Payments</h2>
          <p class="font-thin text-xl text-zinc-500">
            Ultra-fast and low-cost transactions using Solana blockchain, ensuring secure and instant payments.
          </p>
        </div>

        <div class="feature-box animate-fade-in ">
          <h2 class="text-2xl text-zinc-300 font-bold py-4">Instant Receipt Generation</h2>
          <p class="font-thin text-xl text-zinc-500">
            Transaction hashes are securely stored, and buyers receive authenticated receipts for transparent
            transactions.
          </p>
        </div>

        <div class="feature-box animate-fade-in ">
          <h2 class="text-2xl text-zinc-300 font-bold py-4">Dealer Dashboard</h2>
          <p class="font-thin text-xl text-zinc-500">
            Private dashboard access for dealers to track sales history, manage inventory, and monitor transactions.
          </p>
        </div>

        <div class="feature-box animate-fade-in ">
          <h2 class="text-2xl text-zinc-300 font-bold py-4">Verified Car Listings</h2>
          <p class="font-thin text-xl text-zinc-500">
            Every car listing is reviewed and verified to ensure high-quality and trustworthy vehicle options.
          </p>
        </div>

        <div class="feature-box animate-fade-in ">
          <h2 class="text-2xl text-zinc-300 font-bold py-4">Community & Support</h2>
          <p class="font-thin text-xl text-zinc-500">
            Join a growing community of car buyers and dealers, backed by 24/7 customer support for any inquiries.
          </p>
        </div>
      </div>

      <!-- Call-to-Action -->
      <div class="text-center animate-fade-up">
        <a class="px-8 py-4 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-600 transition">
          Get Started Now
        </a>
      </div>

    </div>
  </section>





</template>

<style scoped>
@import "tailwindcss";

.feature-box {
  @apply bg-zinc-900 p-8 rounded-lg shadow-lg transition hover:scale-105;
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
