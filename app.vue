<script setup>
const { currentPhrase, drawPhrase, copyCurrentPhrase } = usePhrase();

const gridBlocks = [
  [2, 5],
  [3, 1],
  [4, 3],
];

const footer = {
  main: [
    { tag: "Code", name: "Z4nder", href: "https://z4nder.dev" },
    { tag: "Community", name: "Hive", href: "https://hivecommunity.dev" },
    { tag: "Design", name: "Gaby", href: "https://linkme.bio/gabydpereira" },
  ],
};
</script>

<template>
  <div class="flex justify-center items-center flex-col px-5">
    <a
      v-motion="{
        initial: {
          y: -500,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            damping: 50,
          },
        },
      }"
      class="hover:cursor-pointer"
      target="_blank"
      href="https://pt.pngtree.com/freepng/3d-sun-with-a-smiling-face-wearing-sunglasses_11129967.html"
    >
      <nuxt-img
        format="png"
        src="img/sun.png"
        width="400"
        height="380"
        alt="Imagem de um sol sorrindo com oculos escuro"
      />
    </a>

    <!-- Colocar ref para o autor da imagem https://pt.pngtree.com/so/sol-3d -->

    <div class="flex flex-col justify-center items-center gap-2 py-5">
      <h1 class="text-2xl text-gray-500 font-bold text-center">
        Está pensando em dizer que está calor ?
      </h1>
      <h2 class="text-xl text-gray-500 text-center">Ao menos seja criativo</h2>
      <v-button
        size="base"
        variant="primary"
        :icon-left="['fab', 'github']"
        text="GitHub"
        :class="{ '!pointer-events-none': loading }"
        @click="drawPhrase"
      />
    </div>

    <div class="py-5">
      <SpotlightCard
        from="#fefae8"
        via="#ffcc33"
        size="300"
        class="w-full max-w-2xl rounded-[--radius] bg-white/10 p-8 [--radius:theme(borderRadius.2xl)]"
      >
        <div
          class="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-sundark-400"
        ></div>

        <GridPattern
          :size="64"
          :offset-x="0"
          :offset-y="0"
          class="absolute -top-1/2 right-0 h-[200%] w-2/3 skew-y-12 stroke-sunglow-200 stroke-[2] [mask-image:linear-gradient(-85deg,black,transparent)]"
        >
          <GridBlock
            v-for="([row, column], index) in gridBlocks"
            :key="index"
            :row="row"
            :column="column"
            class="fill-sunglow-600 transition duration-500 hover:fill-sunglow-700"
          />
        </GridPattern>

        <div class="relative">
          <div
            class="font-display text-lg font-semibold text-white md:text-2xl"
          >
            {{ currentPhrase.text }}
          </div>

          <button
            @click="copyCurrentPhrase"
            class="group mt-4 inline-flex items-center gap-2 rounded-lg bg-sundark-600 px-5 py-2.5 font-display text-xs font-medium tracking-wide text-white transition hover:bg-sundark-500 md:mt-8"
          >
            <span class="relative">Copiar</span>

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
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>
            </span>
          </button>
        </div>
      </SpotlightCard>
    </div>

    <footer class="">
      <div class="mx-auto max-w-7xl overflow-hidden px-6 pt-24 lg:px-8">
        <nav class="-mb-6 flex gap-8" aria-label="Footer">
          <div v-for="item in footer.main" :key="item.name" class="pb-6">
            <a
              target="_blank"
              :href="item.href"
              class="text-sm leading-6 text-gray-500 hover:text-gray-600"
            >
              {{ item.name }}
            </a>
          </div>
        </nav>
      </div>
    </footer>
  </div>
</template>
