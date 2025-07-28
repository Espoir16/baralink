import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function HomeUser() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/auth');
      }
    });
  }, []);

  return (
    <section style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h2>Bienvenue sur ton espace personnel 👋</h2>
      <p>Ici tu pourras voir tes missions, ton profil, etc.</p>
    </section>
  );
}

export default HomeUser;
