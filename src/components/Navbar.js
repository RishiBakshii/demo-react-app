import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <header className="header">
      <h1 className="brandname">Sample Navigation</h1>
      <nav className="nav">
        <ul className="navbar">
          <li className="nav-items"><Link className='navLinks' to='/'>Home</Link></li>
          <li className="nav-items"><Link className='navLinks' to="/about">About</Link></li>
          <li className="nav-items"><Link className='navLinks' to="/contact">Contact</Link></li>
          <li className="nav-items"><Link className='navLinks' to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
