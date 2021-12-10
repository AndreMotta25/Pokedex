import "./style.css";
function Pokemon({ children }) {
  const { nome, img, hp, efeito, df, atk, ataque } = children;
  return (
    <div id="card-container" className="borda">
      <div className="header">
        <h2 className="titulo fonte">{nome}</h2>
        <span className="hp fonte">{hp}</span>
      </div>
      <img src={img} alt={nome} className="pokemon-image" />
      <h3 className="atk fonte">{ataque}</h3>
      <p className="efeito">{efeito}</p>
      {/* depois vou fazer essa parte virar um componente */}
      <ul className="info-pokemon">
        <li className="status fonte borda" style={{ background: "#2D76E4" }}>
          {df}
        </li>
        <li className="status fonte borda" style={{ background: "#F14949" }}>
          {atk}
        </li>
      </ul>
    </div>
  );
}
export default Pokemon;
