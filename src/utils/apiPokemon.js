var listaP = [];
let proximo = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
async function PegarPokemon() {
  const pokemons = await (await fetch(proximo)).json();
  proximo = pokemons.next;
  return pokemons.results;
}
async function Pokemons_array() {
  // listaP.splice(0, listaP.length);
  const pokemons = await PegarPokemon();
  await Promise.all(
    /*   ========== Explicação do codigo ===========*/
    pokemons.map(async (element) => {
      const infoPokemon = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
      ).json();
      listaP.push(infoPokemon);
    })
  );
  console.log(listaP);
  return listaP;
}
// só quem vai usar isso é o input search
async function PesquisarPokemon(pokemon) {
  if (typeof pokemon != "object") {
    const pokemonPesquisado = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    ).json();
    return pokemonPesquisado;
  } else {
    return null;
  }
}

export { Pokemons_array, PesquisarPokemon };
