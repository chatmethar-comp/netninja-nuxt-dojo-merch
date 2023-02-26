<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
        </Head>
        <ProductDetail :product="product"></ProductDetail>
    </div>
</template>

<script setup>

const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id

const  { data:product } = await useFetch(uri, {key: id});

if(!product.value) {
    throw createError({ statusCode: 404, statusMessage: "Product not found!", fatal: true})
}

definePageMeta({
    layout: 'products',
})
</script>

<style lang="scss" scoped>

</style>