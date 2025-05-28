<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">GIFs em Alta</h1>
        <div class="mb-4">
            <input v-model="search" @keyup.enter="searchGifs" type="text" placeholder="Buscar GIFs..."
                class="border rounded px-4 py-2 w-full" />
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="gif in store.gifs" :key="gif.id" class="relative">
                <img :src="gif.images.fixed_height.url" :alt="gif.title" class="rounded shadow-md" />
                <button @click="toggleFavorite(gif)"
                    class="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-md">
                    ❤️
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useGifStore } from 'src/stores/gifStore'
const store = useGifStore()
const gifs = ref([])

const loadTrending = async () => {
    await store.fetchTrending()
    gifs.value = store.gifs
}

onMounted(loadTrending)
</script>