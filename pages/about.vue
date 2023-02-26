<template>
    <div>
        <h1>about</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem accusamus eos quo atque sed animi quaerat, doloremque sapiente dolorem!</p>
        <div>{{ data }}</div>
    </div>


</template>

<script setup>
// const {data } = await useFetch('/api/ninja?name=mario', {
//     method: 'post',
//     body: {age: 30}
// })

const {data} = await useFetch('/api/currency/GBP')
</script>

<style scoped>

</style>