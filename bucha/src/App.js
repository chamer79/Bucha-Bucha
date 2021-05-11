import { baseURL, config } from "./services";
import { Link, Route } from "react-router-dom";
import {  useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Recipes from "./components/Recipes"


function App() {
  const [flavors, setFlavors] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false);
  
    
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
      <main>
      <Route exact path="/"> 
      <Home />
        </Route>
          
        <Route path="/show/:type">
          <Recipes flavors={flavors}
            setToggleFetch={setToggleFetch}
          />
        </Route>
        
          
        <Route path="/bucha-basics"></Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
