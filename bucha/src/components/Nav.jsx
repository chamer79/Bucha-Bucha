import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="header">
      <nav>
        <Link to="/">
          <h1>BUCHA BUCHA</h1>
        </Link>
      </nav>
    </header>
  )
}

export default Nav; 