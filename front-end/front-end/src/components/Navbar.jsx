import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ height: '80px', backgroundColor: '#333', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'row' }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/register" style={{ textDecoration: 'none', color: '#fff', padding: '10px', borderRadius: '5px', transition: 'background-color 0.3s' }}>
            Registration
          </Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/login" style={{ textDecoration: 'none', color: '#fff', padding: '10px', borderRadius: '5px', transition: 'background-color 0.3s' }}>
            LogIn
          </Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/stock" style={{ textDecoration: 'none', color: '#fff', padding: '10px', borderRadius: '5px', transition: 'background-color 0.3s' }}>
            Stock
          </Link>
          
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/stock" style={{ textDecoration: 'none', color: '#fff', padding: '10px', borderRadius: '5px', transition: 'background-color 0.3s' }}>
            WatchList
          </Link>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
