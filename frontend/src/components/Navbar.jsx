import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <div className='header'>
      <nav className="navbar navbar-expand-sm navbar-dark  bg-dark">
        <div className='container-fluid'>
          <h1 className="navbar-brand">Curd</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item ${isActiveLink('/') ? 'active' : ''}`}>
                <Link className="nav-link" to='/'>User List</Link>
              </li>
              <li className={`nav-item ${isActiveLink('/create') ? 'active' : ''}`}>
                <Link className="nav-link" to='/create'>Create User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
