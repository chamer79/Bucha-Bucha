import { useParams } from "react-router-dom"
import Footer from "./Footer";
import Nav from "./Nav";

function Fruit(props) {
   
  return (
    <div>
      <Nav />
      <h2>Fruit Page</h2>
      <Footer />
    </div>
  )
}

export default Fruit;