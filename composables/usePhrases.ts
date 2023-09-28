export const usePhrase = () => {
  const { $clipboard } = useNuxtApp();
  const phrases = phrasesManager.getPharases();

  const currentPhrase = ref(phrases[0]);

  async function drawPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    currentPhrase.value = phrases[randomIndex];
  }

  function copyCurrentPhrase() {
    $clipboard(currentPhrase.value.text);
  }

  return {
    currentPhrase,
    drawPhrase,
    copyCurrentPhrase,
  };
};
