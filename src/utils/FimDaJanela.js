function FimJanela() {
  const TamanhoWindow = window.innerHeight;
  const TamanhoBody = document.body.getBoundingClientRect().bottom;
  if (TamanhoWindow === TamanhoBody) {
    console.log("fim da pagina");
  }
}
export default FimJanela;
