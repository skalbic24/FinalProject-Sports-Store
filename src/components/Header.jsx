import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link to="/" className="btn btn-primary me-2">Home</Link>
      <Link to="/basketball" className="btn btn-info me-2">Basketball</Link>
      <Link to="/soccer" className="btn btn-success me-2">Soccer</Link>
      <Link to="/saved-items" className="btn btn-warning">Saved Items</Link>
    </div>
  </nav>
);

export default Header;