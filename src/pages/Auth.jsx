import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import './Auth.css';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage('Connexion réussie ✅');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage('Compte créé avec succès ✅');
      }
    } catch (error) {
      setMessage(`Erreur : ${error.message}`);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setMessage('Déconnexion réussie ✅');
  };

  return (
    <section className="auth-section">
      <h2>{isLogin ? 'Connexion' : 'Créer un compte'}</h2>
      <form onSubmit={handleAuth} className="auth-form">
        <input type="email" placeholder="Adresse e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="btn primary">
          {isLogin ? 'Se connecter' : 'Créer un compte'}
        </button>
      </form>

      <p className="switch-mode">
        {isLogin ? "Pas encore inscrit ?" : "Déjà un compte ?"}{' '}
        <span onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Créer un compte' : 'Se connecter'}
        </span>
      </p>

      {message && <p className="auth-message">{message}</p>}

      <button onClick={handleLogout} className="btn secondary">Se déconnecter</button>
    </section>
  );
}

export default Auth;
