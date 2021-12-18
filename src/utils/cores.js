export function handleGenerateBG(type) {
  const types = {
    grass: "#ABED77",
    fire: "#E4735A",
    water: "#5C97EE",
    electric: "#F3D361",
    rock: "#504F4E",
    poison: "#8366D4",
    bug: "#D168E2",
    psychic: "#AF25DF",
  };
  return types[type] || "#ccc";
}
