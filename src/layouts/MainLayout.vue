<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-blue-8 text-white flex items-center justify-between px-6">
            <div class="flex items-center">
                <q-btn flat round dense icon="menu" @click="drawer = !drawer" class="q-mr-md q-hidden-lg-up" />
                <!--<img src="/logo.png" alt="Logo" class="h-8 w-8 mr-3" />-->
                <span class="text-xl font-bold">SGMw</span>
            </div>
            <div class="flex items-center">
                <span class="mr-2">Hugo Silva</span>
                <q-avatar>
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" />
                </q-avatar>
            </div>
        </q-header>

        <q-drawer v-model="drawer" show-if-above side="left" bordered class="bg-blue-10 text-white">
            <q-list class="q-pa-sm menu-custom">
                <q-item :to="'/'" clickable v-ripple tag="router-link" class="menu-item">
                    <q-item-section avatar><q-icon name="home" /></q-item-section>
                    <q-item-section>Home</q-item-section>
                </q-item>
                <q-item :to="'/favoritos'" clickable v-ripple tag="router-link" class="menu-item">
                    <q-item-section avatar><q-icon name="favorite" /></q-item-section>
                    <q-item-section>Favoritos</q-item-section>
                </q-item>
                <q-item :to="'/categorias'" clickable v-ripple tag="router-link" class="menu-item">
                    <q-item-section avatar><q-icon name="category" /></q-item-section>
                    <q-item-section>Categorias</q-item-section>
                </q-item>
                <q-item :to="'/sobre'" clickable v-ripple tag="router-link" class="menu-item">
                    <q-item-section avatar><q-icon name="info" /></q-item-section>
                    <q-item-section>Sobre</q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-page-container class="main-page">
            <router-view />
        </q-page-container>

    </q-layout>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)
</script>

<style scoped>
.menu-custom {
    width: 100%;
    padding-top: 20px;
    background-color: #0b0b3b;
}

.menu-item {
    border-radius: 6px;
    margin: 4px 0;
    transition: background-color 0.3s, box-shadow 0.3s;
    padding: 10px;
    font-weight: 500;
}

.menu-item:hover {
    background-color: #1a1a5c;
    box-shadow: inset 2px 0 0 #ffffff;
}

.menu-item .q-icon {
    color: #ffffff;
}

.main-page {
    padding: 30px;
    background-color: #f4f4f4;
    min-height: calc(100vh - 60px);
}

.main-page h1 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 20px;
}
</style>