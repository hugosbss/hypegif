<template>
    <div class="bg-gray-100 min-h-screen">
        <div class="max-w-7xl mx-auto p-6">
            <div class="bg-gray-100 p-4 rounded mb-6">
                <h1 class="text-2xl font-bold text-center text-gray-800">Categorias</h1>
            </div>

            <div class="mb-6 flex flex-wrap gap-2 justify-center">
                <button v-for="cat in categories" :key="cat.name" @click="fetchByCategory(cat.name)"
                    class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition">
                    {{ cat.name }}
                </button>
            </div>

            <div class="flex flex-wrap gap-4">
                <div v-for="gif in gifs" :key="gif.id" class="relative group w-1/2 md:w-1/4">
                    <img :src="gif.images.fixed_height.url" :alt="gif.title" class="rounded shadow-md w-full" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useGifStore } from 'src/stores/gifStore'
const store = useGifStore()

const categories = ref([])
const gifs = ref([])

const fetchCategories = async () => {
    categories.value = await store.fetchCategories()
}

const fetchByCategory = async (category) => {
    await store.fetchGifsByCategory(category)
    gifs.value = store.gifs
}

onMounted(fetchCategories)
</script>
