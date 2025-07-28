import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src="/logo1.jpg" alt="Logo Bara Link" className="logo-header" />
        <nav className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/chercher">Trouver un job</Link>
          <Link to="/poster">Proposer une mission</Link>
          <Link to="/profil">Mon Profil</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
