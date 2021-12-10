import Container from "../Container";
import "./style.css";

// import '../Container'
function Header({ children }) {
  return (
    <header>
      <Container>{children}</Container>
    </header>
  );
}
export default Header;
