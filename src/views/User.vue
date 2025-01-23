<template>

    <section>
        <h1 class="text-white text-5xl">
            my name is {{ name }}
        </h1>
    </section>
</template>
<script>


export default {
    props: {
        name: String
    }
}

</script>