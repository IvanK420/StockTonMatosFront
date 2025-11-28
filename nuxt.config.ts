// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    css: ['./app/assets/css/main.css'],
    modules: ['@pinia/nuxt',
        'nuxt-auth-utils',
        'pinia-plugin-persistedstate/nuxt'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    runtimeConfig: {
        public: {
            apiBase: '/api'
        }
    },
    routeRules: {
        // Proxy /api/login to http://127.0.0.1:8000/auth
        '/api/auth': {
            proxy: 'http://127.0.0.1:8000/auth',
        },
        // Proxy /api/** to http://127.0.0.1:8000/api/**
        '/api/**': {
            proxy: 'http://127.0.0.1:8000/api/**',
        }
    }
})