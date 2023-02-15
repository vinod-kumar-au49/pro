import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav">
        <Link to="/" className="innerNav">
          Home
        </Link>

        <Link to="/cakes" className="innerNav">
          All Products
        </Link>

        <Link to="/order" className="innerNav">
          Orders
        </Link>

        <Link to="/about" className="innerNav">
          About
        </Link>

        <Link to="/signup" className="innerNav">
          Signup
        </Link>

        <header ><Link to="/logout" className="innerNav">
          Logout
        </Link></header>

      </ul>
    </nav>
  );
};

export default Nav;
