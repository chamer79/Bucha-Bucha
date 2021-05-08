import { baseURL, config } from "./services";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { useEffect } from "react";
import axios from "axios";
import './App.css';
import { Link, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer"

function App() {
  //=================================
  //  GET Request
  //=================================


  //=================================
  //  Passing Nav & Footer
  // ------------------------
  //  Creating Button  Importing
  //   buttons 
  //=================================
  return (
    <div className="App">
      <Nav />
      <Route exact path="/"></Route>
      <main>
        <h2>Flavor. Ferment. Enjoy.</h2>
        <p>Welcome! Bucha Bucha is a community where people can share, get inspired, or experiment with various recipes to flavor home brewed kombuchas.</p>
        <div>
 
          <button>Bucha Basics</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
