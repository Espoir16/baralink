import './PostMission.css';

function PostMission() {
  return (
    <section className="post-mission-section" data-aos="fade-up">
      <h2>📋 Proposer une mission</h2>
      <form className="mission-form">
        <input type="text" placeholder="Titre de la mission (ex : Livraison, Aide ménagère...)" required />
        <textarea placeholder="Description détaillée de la mission" rows="4" required></textarea>
        
        <input type="text" placeholder="Lieu (ville/quartier)" required />
        <input type="date" required />
        <input type="number" placeholder="Montant proposé (en F CFA)" required />
        <input type="tel" placeholder="Téléphone / WhatsApp" required />

        <button type="submit" className="btn primary">Publier la mission</button>
      </form>
    </section>
  );
}

export default PostMission;
