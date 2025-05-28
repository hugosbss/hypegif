import { defineStore } from 'pinia'
import axios from 'axios'

const API_KEY = process.env.VITE_API_KEY;
const BASE_URL = 'https://api.giphy.com/v1'

export const useGifStore = defineStore('gif', {
  state: () => ({
    gifs: [],
    categories: [],
    favorites: []
  }),

  actions: {
    async fetchTrending() {
      try {
        const { data } = await axios.get(`${BASE_URL}/gifs/trending`, {
          params: { api_key: API_KEY, limit: 20 }
        })
        this.gifs = data.data
      } catch (error) {
        console.error('Erro ao buscar GIFs em alta:', error)
      }
    },

    async searchGifs(term) {
      try {
        const { data } = await axios.get(`${BASE_URL}/gifs/search`, {
          params: { api_key: API_KEY, q: term, limit: 20 }
        })
        this.gifs = data.data
      } catch (error) {
        console.error('Erro ao buscar GIFs:', error)
      }
    },

    async fetchCategories() {
      try {
        const { data } = await axios.get(`${BASE_URL}/gifs/categories`, {
          params: { api_key: API_KEY }
        })
        this.categories = data.data.map(cat => ({
          name: cat.name,
          gif: cat.gif.images.fixed_height.url
        }))
        return this.categories
      } catch (error) {
        console.error('Erro ao buscar categorias:', error)
        return []
      }
    },

    async fetchGifsByCategory(category) {
      try {
        const { data } = await axios.get(`${BASE_URL}/gifs/search`, {
          params: { api_key: API_KEY, q: category, limit: 20 }
        })
        this.gifs = data.data
      } catch (error) {
        console.error('Erro ao buscar GIFs da categoria:', error)
      }
    },

    loadFavorites() {
      try {
        const local = localStorage.getItem('favorites')
        this.favorites = local ? JSON.parse(local) : []
      } catch (error) {
        console.error('Erro ao carregar favoritos do localStorage:', error)
        this.favorites = []
      }
    },

    toggleFavorite(gif) {
      const exists = this.favorites.find(item => item.id === gif.id)
      if (exists) {
        this.favorites = this.favorites.filter(item => item.id !== gif.id)
      } else {
        this.favorites.push(gif)
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },

    removeFavorite(id) {
      this.favorites = this.favorites.filter(item => item.id !== id)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    }
  }
})
