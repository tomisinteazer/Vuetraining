<template>

    <section>
        <h1>
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