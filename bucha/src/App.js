import { baseURL, config } from "./services";
import axios from "axios";
import './App.css';
import { Route } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";

function App() {
  


  return (
    <div className="App">
      <Nav />
      <Route exact path="/">

      </Route>
    </div>
  );
}

export default App;
