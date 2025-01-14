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
        bio: "A big bad angry werewolf in a giant forest.",
        color: ["red", "blue", "white", "yellow"]
      }

    }
  }
</script>

