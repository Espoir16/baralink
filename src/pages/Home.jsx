import './Home.css';

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content" data-aos="fade-up">
          <h1>Connecte ton talent à l'opportunité</h1>
          <p>
            La plateforme qui relie étudiants et particuliers autour de petits boulots flexibles au Bénin.
          </p>

          {/* Nouveau bouton d'accès à l'authentification */}
          <div className="auth-button">
            <a href="/auth" className="btn login">🔐 Se connecter / S’inscrire</a>
          </div>

          <div className="cta-buttons">
            <a href="/chercher" className="btn primary">🎯 Je cherche un job</a>
            <a href="/poster" className="btn secondary">📋 Je propose une mission</a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="steps-section" >
        <h2>Comment ça marche ?</h2>
        <div className="steps">
          <div className="step">
            <span>1️⃣</span>
            <h3>Inscris-toi</h3>
            <p>Crée ton profil en quelques clics et précise tes compétences.</p>
          </div>
          <div className="step">
            <span>2️⃣</span>
            <h3>Trouve une mission</h3>
            <p>Parcours les offres proches de toi et postule.</p>
          </div>
          <div className="step">
            <span>3️⃣</span>
            <h3>Gagne de l'argent</h3>
            <p>Effectue tes missions et reçois ton paiement directement.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <h2>Une question ? Contacte-nous</h2>
        <form className="contact-form">
          <input type="text" placeholder="Nom complet" required />
          <input type="email" placeholder="Adresse email" required />
          <textarea placeholder="Votre message..." rows="4" required />
          <button type="submit" className="btn primary">Envoyer</button>
        </form>
      </section>
    </main>
  );
}

export default Home;
