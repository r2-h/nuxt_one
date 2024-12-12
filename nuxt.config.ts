// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "@nuxt/image",
    "nuxt-typed-router",
    "dayjs-nuxt",
    "nuxt-file-storage",
    // "@prisma/nuxt",
  ],
  // prisma: { autoSetupPrisma: true },
  fonts: {
    families: [{ name: "My Font Family", provider: "google" }],
  },
  css: ["~/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
           @use "~/assets/scss/_vars.scss" as *; 
           @use "~/assets/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },
})