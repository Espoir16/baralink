import './Profile.css';

function Profile() {
  const user = {
    name: 'Armel H.',
    role: 'Travailleur',
    location: 'Cotonou',
    phone: '+229 97 12 34 56',
    rating: 4.5,
  };

  const missions = [
    {
      title: 'Livraison de documents',
      date: '2024-07-20',
      status: 'Terminée',
      earnings: '3 000 F CFA',
    },
    {
      title: 'Aide événementielle',
      date: '2024-07-22',
      status: 'Acceptée',
      earnings: '7 500 F CFA',
    },
  ];

  return (
    <section className="profile-section" data-aos="fade-up">
      <div className="profile-card">
        <h2>👤 Profil</h2>
        <p><strong>Nom :</strong> {user.name}</p>
        <p><strong>Rôle :</strong> {user.role}</p>
        <p><strong>Ville :</strong> {user.location}</p>
        <p><strong>Téléphone :</strong> {user.phone}</p>
        <p><strong>Note :</strong> ⭐ {user.rating}/5</p>
      </div>

      <div className="mission-history">
        <h3>📂 Missions récentes</h3>
        {missions.map((m, i) => (
          <div className="mission-entry" key={i}>
            <h4>{m.title}</h4>
            <p><strong>Date :</strong> {m.date}</p>
            <p><strong>Statut :</strong> {m.status}</p>
            <p><strong>Gain :</strong> {m.earnings}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Profile;
