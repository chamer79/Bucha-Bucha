import { baseURL, config } from "./services";
import { Component } from "react";
import { Link, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Footer from "./components/Footer"
import Fruit from "./components/Fruit"
import Nav from "./components/Nav";


function App() {
  const [toggleFetch, setToggleFetch] = useState(false);
  const [visible, setVisible] = useState(false);
  const [flavors, setFlavors] = useState([]);
    
  //=================================
  //  GET Request
  //=================================
  useEffect(() => {
    const fetchFlavors = async () => {
      const resp = await axios.get(baseURL, config);
      setFlavors(resp.data.records);
    }
    fetchFlavors();
  }, [toggleFetch])

  //=================================
  //  Passing Nav & Footer
  // ------------------------
  //  Creating Dropdown & Button  
  //=================================
  return (
    <div className="App">
      <Nav />
      <Route exact path="/"></Route>
      <main>
        <h2>Flavor. Ferment. Enjoy.</h2>
        <p>Welcome! Bucha Bucha is a community where people can share, get inspired, or experiment with various recipes to flavor home brewed kombucha.</p>
        <section>
          <div className="dropdown" className={visible ? "visible" : "invisible"}>
            <button onClick={() => setVisible(!visible)}>Categories</button>
            <Link to="/Fruits">
              Fruits
             {/* {flavors.map((flavor) => (
               <Link to={`/flavor/${flavor.type}`}>
                 <Fruit flavors={flavor}
                   setToggleFetch={setToggleFetch}/>
              </Link>
             ))} */}
              </Link>
            <Link to="/Herbs">Herbs &amp; Spices</Link>
            <Link to="/Micsllaneous">Micsllaneous</Link>
          </div>
          <button>Bucha Basics</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
