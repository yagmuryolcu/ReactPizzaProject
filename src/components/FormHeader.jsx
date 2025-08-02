import React from 'react';
import './FormHeader.css';
import { Link } from 'react-router-dom';

export function FormHeader() {
  return (
    <header className="header">
      <h1 className="title">Teknolojik Yemekler</h1>
      <nav className="nav-links">
        <Link to="/" className="nav-home">Anasayfa</Link>
        
        <span className="current-page"> - Sipariş Oluştur</span>
      </nav>
    </header>
  );
}

export default FormHeader;
