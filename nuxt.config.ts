// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/google-fonts"],
  css: ["~/node_modules/modern-normalize/modern-normalize.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },

  googleFonts: {
    families: {
      Montserrat: {
        wght: "600",
      },
    },
    display: "swap",
  },
});
