import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        "@/assets/styles/main.scss"
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "node_modules/vanilla-framework"; @import "@/assets/styles/_variables.scss"; @include vanilla;'
                }
            }
        }
    }
})
