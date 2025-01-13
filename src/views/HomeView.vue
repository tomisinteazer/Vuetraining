<template>


  <section>
    Hello Vue {{ username }}
  </section>
</template>

<script>
  export default {

    data() {

      return {

        username: "Lone Wolf",
        bio: "A big bad wolf in a giant forest."
      }

    }
  }
</script>