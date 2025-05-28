<template>
    <div class="bg-gray-100 min-h-screen">
        <div class="max-w-7xl mx-auto p-6">
            <div class="bg-gray-100 p-4 rounded mb-6">
                <h1 class="text-2xl font-bold text-center text-gray-800">Home</h1>
            </div>

            <div class="mb-6 flex justify-center">
                <div class="w-full max-w-md">
                    <input v-model="search" @keyup.enter="searchGifs" type="text" placeholder="Buscar GIFs..."
                        class="border border-gray-300 rounded-lg px-4 py-3 w-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                </div>
            </div>
        </div>
        <div class="ml-100">
            <div class="flex flex-wrap gap-6 padding-top-6 justify-center">
                <div v-for="gif in store.gifs" :key="gif.id"
                    class="bg-white rounded shadow-md p-4 flex flex-col items-center w-64">
                    <img :src="gif.images.fixed_height.url" :alt="gif.title" class="w-full block mb-4 rounded" />
                    <button @click="toggleFavorite(gif)"
                        class="block w-full text-white text-sm px-4 py-2 rounded transition"
                        style="background-color: #0b0b3b;">
                        ❤️ Favoritar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useGifStore } from 'src/stores/gifStore'
const store = useGifStore()
const search = ref('')

const loadTrending = async () => {
    await store.fetchTrending()
}

const searchGifs = async () => {
    if (search.value.trim()) {
        await store.searchGifs(search.value)
    } else {
        await loadTrending()
    }
}

const toggleFavorite = (gif) => {
    store.toggleFavorite(gif)
}

onMounted(loadTrending)
</script>