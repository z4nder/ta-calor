// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@tresjs/nuxt"],
  app: {
    head: {
      title: "Ta Calor",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap",
        },
      ],
    },
  },
});
