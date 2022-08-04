import { Link } from "react-router-dom";
import { getRandomColor } from "../helpers";
import {AllProducts} from "../pages/AllProducts";


function Header() {
  const randomColor = getRandomColor();
  return (
    <header
      className="header"
      style={{
        // @ts-ignore
        ["--border-colour"]: randomColor
      }}
    >
      <div className="header__logo" style={{ color: randomColor }}>
        Hoxbay
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            {/* Create here a link to this page */}
            <Link to={"/products"}>Home</Link>
          </li>
          <li>
            {/* Create here a link to this page */}
            <Link to={"/categories"}>Categories</Link>
          </li>
          <li>
            {/* Create here a link to this page */}
            <Link to={"/basket"}>Basket</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
