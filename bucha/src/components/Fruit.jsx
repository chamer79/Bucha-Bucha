import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

function Fruit(props) {
   
  return (
    <div>
      <Nav />
      <Route path="/Fruit"></Route>
      <Footer />
    </div>
  )
}

export default Fruit;