<template>
    <div class="text-center card flex flex-col justify-between">
        <img :src="product.image" alt="product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`"><p class="btn my-4">view detail</p></NuxtLink>
    </div>
</template>

<script setup>
    const {product} = defineProps(["product"]);
</script>

<style scoped>
.thumb {
    max-height: 1200px;
    max-width: 70%;
    margin: 0 auto;
}
</style>