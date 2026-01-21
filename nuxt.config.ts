// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    css: ['./app/assets/css/main.css'],
    modules: [
      '@pinia/nuxt',
      'nuxt-auth-utils',
      'pinia-plugin-persistedstate/nuxt',
      '@nuxt/ui',
      '@nuxt/icon',
      'nuxt-lucide-icons'
    ],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    runtimeConfig: {
        public: {
            apiBase: '/api'
        },
        session: {
            name: 'nuxt-session',
            password: process.env.NUXT_SESSION_PASSWORD as string || "12345678901234567890123456789012", // Doit faire 32 caractères min.
            cookie: {
                // Durée de vie en secondes (ex: 7 jours)
                maxAge: 60 * 60 * 24 * 7, 
                sameSite: 'lax',
                secure: false,
            }
        }
    },
    routeRules: {
        '/api/_auth/**': { proxy: '' },
        // Proxy /api/login to http://127.0.0.1:8000/auth
        '/api/auth': {
            proxy: 'http://127.0.0.1:8000/auth',
        },
        // Proxy /api/** to http://127.0.0.1:8000/api/**
        // '/api/**': {
        //     proxy: 'http://127.0.0.1:8000/api/**',
        // }
    }
})