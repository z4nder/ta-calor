<script setup lang="ts">
defineProps({
  text: String,
  loading: Boolean,
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "base",
  },
  iconLeft: [String, Array],
  iconRight: [String, Array],
});

const variants: {
  primary: string;
  secondary: string;
  error: string;
  outline: string;
  inherit: string;
} = {
  primary:
    "bg-sundark-600 text-white  hover:bg-sundark-700  focus:ring-sundark-300",
};

const sizes: { sm: string; base: string; lg: string } = {
  sm: "px-3 py-[8px] text-sm leading-[19px]",
  base: "px-5 py-[9.5px] text-sm leading-[19px]",
  lg: "px-5 py-[13.5px] text-base leading-[23px]",
};
</script>

<template>
  <button
    type="button"
    class="group rounded-lg font-display text-xs font-medium tracking-wide"
    :class="[variants[variant], sizes[size]]"
  >
    <v-spinner class="h-4 w-4" v-if="loading" />
    <div v-else class="inline-flex items-center gap-2">
      <span class="relative">Gerar frase</span>

      <span class="relative h-5 w-px bg-white/10"></span>

      <span
        class="group-hover relative mt-px font-display font-medium text-white/50 transition duration-300 group-hover:text-white/100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </span>
    </div>
  </button>
  <!-- <button
    type="button"
    class="flex cursor-pointer items-center justify-center gap-2 rounded-lg font-medium focus:ring-4"
    :class="[variants[variant], sizes[size]]"
  >
    <v-spinner class="h-4 w-4" v-if="loading && !iconRight" />
    <font-awesome-icon
      v-else-if="iconLeft"
      class="text-base"
      :icon="iconLeft"
    />
    <span v-if="text"> {{ text }}</span>
    <v-spinner class="h-4 w-4" v-if="loading && iconRight" />
    <div class="text-base">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    </div>
  </button> -->
</template>
