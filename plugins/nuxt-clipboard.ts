import { VueClipboard, toClipboard } from "@soerenmartius/vue3-clipboard";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueClipboard);

  return {
    provide: { clipboard: toClipboard },
  };
});
