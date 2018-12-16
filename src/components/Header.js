import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import '../style/header.css';

const Header = () => {
  return (
      <div className="Header">
        <Search />
        <button>
          <Link to={'/create'} style={{color: 'black'}}>Create a new record</Link>
        </button>
      </div>
  );
}

export default Header;
