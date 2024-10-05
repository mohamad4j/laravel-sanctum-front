// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  modules: ['nuxt-auth-sanctum'],
  sanctum: {
    baseUrl: 'https://www.test.vahiiid.space/api', // Laravel API
    mode: "cookie",
    redirectIfAuthenticated: false,
    redirectIfUnauthenticated: false,
    endpoints: {
      csrf:"https://www.test.vahiiid.space/sanctum/csrf-cookie",
      login: '/auth/login',
      user: '/auth/user',
      logout: "/auth/logout",
    },
    redirect: {
      onLogin: false,
      onAuthOnly: "/login",
      keepRequestedRoute: true,
    },
    logLevel: 5,
  },
})
