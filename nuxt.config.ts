// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      title: "Nuxt 3 with Baklava",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@trendyol/baklava@3.0.0-beta.12/dist/themes/default.css",
        },
      ],
      script: [
        {
          type: "module",
          src: "https://cdn.jsdelivr.net/npm/@trendyol/baklava@3.0.0-beta.12/dist/baklava.js",
        },
      ],
    },
  },
  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("bl-"),
        },
      },
    },
  },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],
});
