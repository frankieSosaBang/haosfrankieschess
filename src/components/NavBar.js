import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ 
      padding: '1rem', 
      borderBottom: '1px solid #ccc',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          TurniejApp
        </Link>
      </div>
      
      <ul style={{ 
        display: 'flex', 
        gap: '2rem',
        alignItems: 'center'
      }}>
        <li>
          <Link to="/turnieje">Turnieje</Link>
        </li>
        <li>
          <Link to="/ranking">Ranking</Link>
        </li>
        <li>
          <Link to="/profil">Profil</Link>
        </li>
        <li>
          <Link to="/logowanie">Zaloguj się</Link>
        </li>
        <li>
          <Link to="/rejestracja" style={{
            padding: '0.5rem 1rem',
            border: '1px solid #000',
            borderRadius: '4px'
          }}>
            Zarejestruj się
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar; 