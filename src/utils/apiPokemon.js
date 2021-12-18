var listaP = [];
async function PegarPokemon() {
  const pokemons = await (
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  ).json();
  return pokemons.results;
}
async function Pokemons_array() {
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
    return "não era pra retornar";
  }
}

export { Pokemons_array, PesquisarPokemon };
