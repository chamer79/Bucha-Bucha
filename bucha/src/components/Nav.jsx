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
      <div className="sub-nav">
        <div
          className="dropdown"
          className={visible ? "visible" : "invisible"}
          >
          <button onClick={() => setVisible(!visible)}>Recipes</button>
          <Link to="/show/fruit">Fruits</Link>
          <Link to="/show/herb-spice">Herbs &amp; Spices</Link>
          <Link to="/show/misc">Micsllaneous</Link>
        </div>
        <Link to="/bucha-basics">Bucha Basics</Link>
        <Link to="/post">Post Recipe</Link>
      </div>
          </nav>
    </header>
  );
}

export default Nav;
