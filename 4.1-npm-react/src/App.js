//import logo from './logo.svg';
import './App.css';
import { Nav, Navbar} from "react-bootstrap";
import React from 'react';
import logo from './spotify-logo.svg';

function NaviBar() {
  return (

    <Navbar variant="dark" className="Navibar">
      <img src={logo} className="logo center" alt="" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className = "textNav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" >Premium</Nav.Link>
          <Nav.Link href="#link">Help</Nav.Link>
          <Nav.Link href="#link">Download</Nav.Link>
          <li>|</li>
          <Nav.Link href="#link">Sign up</Nav.Link>
          <Nav.Link href="#link">Log In</Nav.Link>
          </Nav>
           </div>
        


      </Navbar.Collapse>
    </Navbar>

  );
}

function Header() {
  return (
  <div className = "header"> 
  <div className="container center hero-img">
    <div className = "title">  
   Free music. Millions of songs.
    </div>
            <p2>Play on any device. No credit card needed.</p2>
           <div className = "btn-spotify"> get spotify free</div>
      </div>
  </div>
  
  );
}

function Footer()
{
  return (
    <div>
    <footer>
        <div className="container">
            <div className="column footer-logo">
                <i className="fab fa-spotify" />
                <img src={logo} className="logo center" alt="" />
            </div>
        <div className="column">
            <h1>Company</h1>
            <p>About</p>
            <p>Jobs</p>
            <p>For the Record</p>
        </div>
        <div className="column">
            <h1>Communities</h1>
            <p>For Artists</p>
            <p>Developers</p>
            <p>Brands</p>
            <p>Investors</p>
            <p>Vendors</p>
        </div>
        <div className="column">
            <h1>Useful Links</h1>
            <p>Help</p>
            <p>Web Player</p>
            <p>Free Mobile App</p>
        </div>
        </div>
    </footer>
</div>
  );
}

//XMS always needs to return st 
function App() {
  return (

    <div className="App">
      <NaviBar />
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
