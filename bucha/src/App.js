import { baseURL, config } from "./services";
import { Link, Route } from "react-router-dom";
import {  useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Footer from "./components/Footer";
import Fruit from "./components/Fruit";
import Herbs from "./components/Herbs";
import Micsllaneous from "./components/Miscellaneous";
import Nav from "./components/Nav";


function App() {
  const [flavors, setFlavors] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false);
  const [visible, setVisible] = useState(false);
    
  //=================================
  //  GET Request
  //=================================
  useEffect(() => {
    const fetchFlavors = async () => {
    const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/flavors`;
    const config = {
      headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    };
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
            <Link to="/show/fruit">Fruits</Link>
            <Link to="/show/herb-spice">Herbs &amp; Spices</Link>
            <Link to="/show/misc">Micsllaneous</Link>
          </div>
          <button>Bucha Basics</button>
        </section>
        <Route path="/show/:type">
          <Fruit flavors={flavors} />
          {/* <Herbs flavors={flavors} />
          <Micsllaneous flavors={flavors} /> */}
        </Route>
   
      </main>
      <Footer />
    </div>
  );
}

export default App;
