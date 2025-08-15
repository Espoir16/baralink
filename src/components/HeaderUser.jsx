import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import './HeaderUser.css';

function HeaderUser() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <header className="header-user">
      <div className="logo-user">
        Bara<span>Link</span>
      </div>
      <nav className="nav-user">
        <Link to="/poster">📨 Proposer une mission</Link>
        <Link to="/chercher">🔍 Trouver un job</Link>
        <Link to="/profil">👤 Mon Profil</Link>
        <button onClick={handleLogout}>🚪 Déconnexion</button>
      </nav>
    </header>
  );
}

export default HeaderUser;
