// * 4 - Importando o Link do React-Router-Dom para linkar as páginas
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> |<Link to="/contact"> Contatos</Link> |
      <Link to="/name"> Name</Link>
    </nav>
  );
};

export default Navbar;
