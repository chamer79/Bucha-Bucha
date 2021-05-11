import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [visible, setVisible] = useState(false);
  
  return (
    <>
      <h2>Flavor. Ferment. Enjoy.</h2>
      <p className="intro">
        Welcome! Bucha Bucha is a community where people can share, get
        inspired, or experiment with various recipes to flavor home brewed
        kombucha.
      </p>
      <div className ="home-buttons">
        <div className="dropdown" className={visible ? "visible" : "invisible"}>
          <button onClick={() => setVisible(!visible)}>Categories</button>
          <Link to="/show/fruit">Fruits</Link>
          <Link to="/show/herb-spice">Herbs &amp; Spices</Link>
          <Link to="/show/misc">Micsllaneous</Link>
        </div>
        <button className="faq-button">
          <Link to="/bucha-basics">Bucha Basics</Link>
        </button>
      </div>
    </>
  );
}

export default Home;
