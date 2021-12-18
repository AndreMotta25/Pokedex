import Container from "./components/Container";
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";
import Pesquisa from "./components/Pesquisa";
import { Pokemons_array } from "./utils/apiPokemon";
import React, { useEffect, useState } from "react";
// import Footer from "./components/footer";
import FimJanela from "./utils/FimDaJanela";

/**Só vai ser executado, caso nenhum pokemon seja pesquisado, vai renderizar os 15 primeiros da lista que vem da api*/
function TopPopular({ pokemon }) {
  return pokemon.map((poke) => <Pokemon key={poke.name} nome={poke} />);
}

function App() {
  const [lista, setLista] = useState([]);
  const [pokemonPesquisado, setPokemonPesquisado] = useState(null);
  /*
  Quando este useEffect for acionado, o fetch vai pegar alguns pokemons da api pokeApi por meio da função 
  Pokemons_array 
  */
  useEffect(() => {
    Pokemons_array().then((obj) => {
      setLista(obj);
    });
    // finaliza o componete
    return () => {
      window.removeEventListener("scroll", FimJanela);
    };
  }, []);
  window.addEventListener("scroll", FimJanela);
  return (
    <>
      <Header>
        <img src="./fotos/pokedex.png" alt="Pokedex" />
        {/* 
           A função1 de state que passamos para o componente Pesquisa, serve para renderizar o pokemon pesquisado
           quando o botão for clicado.
           //  
           Já a função2 serve para que quando o pokemon pesquisado  não for mais satisfatorio, só do usuario apagar todo o nome do pokemon
           volte para a 'pagina principal'. O mesmo para o listaArray
        */}
        <Pesquisa
          funcao1={setPokemonPesquisado}
          funcao2={setLista}
          listaArray={lista}
        />
      </Header>
      <Container classe="container-pokemon">
        {/* A renderização vai ser condicional */}
        {!pokemonPesquisado && <TopPopular pokemon={lista} />}
        {typeof pokemonPesquisado === "object" && (
          <Pokemon nome={pokemonPesquisado} />
        )}
      </Container>
    </>
  );
}

export default App;
