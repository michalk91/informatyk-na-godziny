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
          additionalData: `@use "~/assets/scss/_variables.scss" as *;
            @use "~/assets/scss/_mixins.scss" as *;`,
        },
      },
    },
  },

  googleFonts: {
    families: {
      Montserrat: {
        wght: [400, 600, 700],
      },
    },
    display: "swap",
  },
});
