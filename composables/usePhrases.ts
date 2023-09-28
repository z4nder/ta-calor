export const usePhrase = () => {
  const { $clipboard, $toast } = useNuxtApp();
  const phrases = phrasesManager.getPharases();

  const currentPhrase = ref(phrases[0]);

  async function drawPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    currentPhrase.value = phrases[randomIndex];
  }

  function copyCurrentPhrase() {
    $clipboard(currentPhrase.value.text);
    $toast("Copiado com sucesso");
  }

  return {
    currentPhrase,
    drawPhrase,
    copyCurrentPhrase,
  };
};
