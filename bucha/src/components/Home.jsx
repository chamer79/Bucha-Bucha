import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [visible, setVisible] = useState(false);
  
  return (
    <>
      <h2>Flavor. Ferment. Enjoy.</h2>
      <p>
        Welcome! Bucha Bucha is a community where people can share, get
        inspired, or experiment with various recipes to flavor home brewed
        kombucha.
      </p>
      <section>
        <div className="dropdown" className={visible ? "visible" : "invisible"}>
          <button onClick={() => setVisible(!visible)}>Categories</button>
          <Link to="/show/fruit">Fruits</Link>
          <Link to="/show/herb-spice">Herbs &amp; Spices</Link>
          <Link to="/show/misc">Micsllaneous</Link>
        </div>
        <button>
          <Link to="/bucha-basics">Bucha Basics</Link>
        </button>
      </section>
    </>
  );
}

export default Home;
