import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [visible, setVisible] = useState(false);

  return (
    <header className="header">
      <Link to="/">
        <h1>BUCHA BUCHA</h1>
      </Link>
      <nav>
        <Link to="/show/fruit">Fruits</Link>
        <Link to="/show/herb-spice">Herbs &amp; Spices</Link>
        <Link to="/show/misc">Miscellaneous</Link>
        <Link to="/bucha-basics">Bucha Basics</Link>
        <Link to="/post">Post Recipe</Link>
      </nav>
    </header>
  );
}

export default Nav;
