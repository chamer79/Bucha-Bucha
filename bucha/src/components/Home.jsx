import { useState } from "react";

function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <main className="home-content">
      <h2>Flavor. Ferment. Enjoy.</h2>
      <p className="intro">
        Welcome! Bucha Bucha is a community where people can share, get
        inspired, or experiment with various recipes to flavor home brewed
        kombucha. Our kombucha recipes are seperated into three categories:
        fruit, herbs & spices, and miscellaneous. Your new kombucha
        flavor is just a 'click' away.
      </p>
    </main>
  );
}

export default Home;
