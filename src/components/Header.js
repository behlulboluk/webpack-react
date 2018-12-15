import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import '../style/header.css';

const Header = () => {
  return (
      <div className="Header">
        <Search />
        <Link to={'/create'} style={{color: 'white'}}>Yeni Kayıt Oluştur</Link>
      </div>
  );
}

export default Header;
