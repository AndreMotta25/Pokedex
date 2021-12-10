import Container from "./components/Container";
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";
import Pesquisa from "./components/Pesquisa";
const pokemons = [
  {
    nome: "Shuckle",
    hp: "HP 100",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png",
    ataque: "ATAQUE BIND",
    efeito:
      " Inflicts regular damage. For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn....",
    df: "DF 100",
    atk: "ATK 100",
  },
  {
    nome: "sneasel",
    hp: "HP 50",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png",
    ataque: "ice-punch",
    efeito:
      " Inflicts regular damage.  Has a $effect_chance% chance to freeze the target.",
    df: "DF 150",
    atk: "ATK 80",
  },
  {
    nome: "ditto",
    hp: "HP 70",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    ataque: "ice-punch",
    efeito:
      " Inflicts regular damage.  Has a $effect_chance% chance to freeze the target.",
    df: "DF 150",
    atk: "ATK 80",
  },
];

function App() {
  return (
    <>
      <Header>
        <img src="./fotos/pokedex.png" alt="Pokedex" />
        <Pesquisa />
      </Header>
      <Container classe="container-pokemon">
        <Pokemon>{pokemons[0]}</Pokemon>
        <Pokemon>{pokemons[1]}</Pokemon>
        <Pokemon>{pokemons[2]}</Pokemon>
      </Container>
    </>
  );
}

export default App;
