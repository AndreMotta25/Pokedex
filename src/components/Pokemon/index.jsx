import { handleGenerateBG } from "../../utils/cores";
import "./style.css";
function Pokemon({ nome }) {
  if (nome) {
    const { name, sprites, stats, types } = nome;
    return (
      <div
        id="card-container"
        className="borda"
        style={{ backgroundColor: handleGenerateBG(types[0].type.name) }}
      >
        <div className="header">
          <h2 className="titulo fonte">{name}</h2>
          <span className="hp fonte">HP {stats[0].base_stat}</span>
        </div>
        <img src={sprites.front_default} alt={name} className="pokemon-image" />
        <h3 className="atk fonte">{}</h3>
        <ul className="info-pokemon">
          <li className="status fonte borda" style={{ background: "#2D76E4" }}>
            DF {stats[2].base_stat}
          </li>
          <li className="status fonte borda" style={{ background: "#F14949" }}>
            ATK {stats[1].base_stat}
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
export default Pokemon;
