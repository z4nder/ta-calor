export const usePhrase = () => {
  const phrases = phrasesManager.getPharases();

  const currentPhrase = ref(phrases[0]);

  async function drawPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    currentPhrase.value = phrases[randomIndex];
  }

  return {
    currentPhrase,
    drawPhrase,
  };
};
