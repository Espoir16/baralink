import { useEffect, useState } from 'react';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import './HomeUser.css';

function HomeUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/auth');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="homeuser-main">
      <h1>Bienvenue sur ton espace personnel 👋</h1>
      {user && (
        <p className="user-email">
          Connecté en tant que : <strong>{user.email}</strong>
        </p>
      )}
      <p className="user-desc">
        Accède rapidement à tes missions, ton profil ou poste une nouvelle offre.
      </p>

      <div className="homeuser-actions">
        <Link to="/chercher" className="btn primary">
          🔍 Voir les missions disponibles
        </Link>
        <Link to="/poster" className="btn secondary">
          📨 Proposer une nouvelle mission
        </Link>
      </div>
    </main>
  );
}

export default HomeUser;
