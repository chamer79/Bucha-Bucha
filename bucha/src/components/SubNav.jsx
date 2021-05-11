import { Link } from "react-router-dom";
import { useState } from "react";

function SubNav() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="dropdown-2" className={visible ? "visible" : "invisible"}>
          <button onClick={() => setVisible(!visible)}>Categories</button>
          <Link to="/show/fruit">Fruits</Link>
          <Link to="/show/herb-spice">Herbs &amp; Spices</Link>
        <Link to="/show/misc">Micsllaneous</Link>
        <Link to="/bucha-basics">Bucha Basics</Link>
      </div>  
      <Link to="/post">Post Recipe</Link>
    </div>
  )
}

export default SubNav;