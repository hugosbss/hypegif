<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">GIFs Favoritos</h1>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="gif in store.favorites" :key="gif.id" class="relative">
                <img :src="gif.images.fixed_height.url" :alt="gif.title" class="rounded shadow-md" />
                <button @click="removeFavorite(gif.id)"
                    class="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-md">
                    ❌
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGifStore } from 'src/stores/gifStore'
const store = useGifStore()

const removeFavorite = (id) => {
    store.removeFavorite(id)
}
</script>
