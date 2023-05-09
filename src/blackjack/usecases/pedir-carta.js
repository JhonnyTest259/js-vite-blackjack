/**
 *
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna la carta del deck
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw new Error("deck es obligatorios como un arreglo de string");
  }
  const carta = deck.pop();
  return carta;
};
