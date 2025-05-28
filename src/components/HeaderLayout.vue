<template>
    <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div class="max-w-5xl mx-auto flex items-center justify-between p-4">
            <router-link to="/" class="text-xl font-bold text-indigo-600">SGBR Giphy</router-link>
            <nav class="flex gap-4">
                <router-link to="/" class="text-gray-700 hover:text-indigo-500 transition">Início</router-link>
                <router-link to="/favorites"
                    class="text-gray-700 hover:text-indigo-500 transition">Favoritos</router-link>
                <router-link to="/categories"
                    class="text-gray-700 hover:text-indigo-500 transition">Categorias</router-link>
                <router-link to="/about" class="text-gray-700 hover:text-indigo-500 transition">Sobre</router-link>
            </nav>
        </div>
    </header>
</template>

<script setup>
</script>
