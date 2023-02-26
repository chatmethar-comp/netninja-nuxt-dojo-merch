<template>
    <div>
        <header class="container mx-auto p-4 flex">
            <NuxtLink to="/products" class="font-bold">Nuxt dojo Merch</NuxtLink>
        </header>
        <div class="container mx-auto p-4">
            <slot></slot>
        </div>
        <footer class="contianer mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li><NuxtLink to="/">
                    Home
                </NuxtLink></li>
                <li><NuxtLink to="/about">
                    About
                </NuxtLink></li>
                <li><NuxtLink to="/products">
                    Products
                </NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>