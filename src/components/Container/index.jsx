import "./style.css";
// poderia depois transformar a propriedade classe num array
function Container({ classe, children }) {
  return <div className={"container " + classe}>{children}</div>;
}
export default Container;
