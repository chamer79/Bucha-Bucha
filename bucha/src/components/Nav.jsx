import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [visible, setVisible] = useState(false);

  return (
    <header className="header">
      <nav>
        <Link to="/">
          <h1>BUCHA BUCHA</h1>
        </Link>
      </nav>
      <div className="sub-nav">
        {/* <div
          className="dropdown2"
          className={visible ? "visible" : "invisible"}
        >
          <button onClick={() => setVisible(!visible)}>Explore</button>
          <Link to="/show/fruit">Fruits</Link>
          <Link to="/show/herb-spice">Herbs &amp; Spices</Link>
          <Link to="/show/misc">Micsllaneous</Link>
          <Link to="/bucha-basics">Bucha Basics</Link>
        </div> */}
        <Link to="/post">Post Recipe</Link>
      </div>
    </header>
  );
}

export default Nav;
