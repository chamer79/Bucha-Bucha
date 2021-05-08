import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="header">
      {/* Header image */}
      {/* <img src="https://images.unsplash.com/photo-1583396216852-1e1d61137170?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="kombucha brewing" /> */}
      <nav>
        <Link to="/">
          <h1>BUCHA BUCHA</h1>
        </Link>
      </nav>
    </header>
  )
}

export default Nav; 