import React from 'react';
import './FormHeader.css';
import { Link } from 'react-router-dom';

function FormHeader() {
  return (
    <header className="header">
      <h1 className="title">Teknolojik Yemekler</h1>
      <nav className="nav-links">
        <Link to="/" className="nav-home">Anasayfa</Link>
        
        <Link to="/form" className="current-page"> - Sipariş Oluştur</Link>
      </nav>
    </header>
  );
}

export default FormHeader;
