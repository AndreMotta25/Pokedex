import "./style.css";
import { PesquisarPokemon } from "../../utils/apiPokemon";
import { useState } from "react";

function Pesquisa({ funcao1, funcao2, listaArray }) {
  // serve para ativar ou desativar o botão de pesquisa
  const [desativado, setDesativado] = useState(true);
  return (
    <form>
      {/* Caso haja texto na caixa de pesquisa o botão vai ser habilitado, caso não o mesmo é desabilitado*/}
      <input
        type="search"
        id="pesquisa"
        placeholder="PESQUISAR"
        onChange={() => {
          setDesativado(false);
          if (document.querySelector("#pesquisa").value <= 0) {
            // vai renderizar a tela com os principais pokemons, caso não tenha texto na caixa de pesquisa
            funcao2(listaArray);
            setDesativado(true);
            // limpa o obj pokemon que estava em pokemonPesquisado
            funcao1("");
          }
        }}
      />
      {!desativado && (
        <button
          onClick={(e) => {
            e.preventDefault();
            let texto = document.querySelector("#pesquisa");
            PesquisarPokemon(texto.value).then((obj) => {
              funcao1(obj);
              console.log(obj);
            });
          }}
        >
          pesquisar
        </button>
      )}
      {desativado && <button disabled>Pesquisar</button>}
    </form>
  );
}
export default Pesquisa;
