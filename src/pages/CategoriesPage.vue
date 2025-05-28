<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Categorias</h1>
        <div class="flex flex-wrap gap-2">
            <button v-for="cat in categories" :key="cat.name" @click="fetchByCategory(cat.name)"
                class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                {{ cat.name }}
            </button>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div v-for="gif in gifs" :key="gif.id">
                <img :src="gif.images.fixed_height.url" :alt="gif.title" class="rounded shadow" />
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
