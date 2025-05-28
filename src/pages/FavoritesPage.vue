<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">GIFs Favoritos</h1>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div v-for="gif in store.favorites" :key="gif.id"
                class="bg-white rounded shadow-md flex flex-col items-center p-2">
                <img :src="gif.images.fixed_height.url" :alt="gif.title" class="rounded w-full object-cover mb-4" />
                <button @click="removeFavorite(gif.id)"
                    class="bg-red-500 text-black font-medium px-4 py-2 rounded hover:bg-red-600 transition w-4/5">
                    ❌ Remover
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
