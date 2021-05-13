import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [visible, setVisible] = useState(false);
  
  return (
    <main className="home-content">
      <h2>Flavor. Ferment. Enjoy.</h2>
      <p className="intro">
        Welcome! Bucha Bucha is a community where people can share, get
        inspired, or experiment with various recipes to flavor home brewed
        kombucha.
      </p>
    </main>
  );
}

export default Home;
