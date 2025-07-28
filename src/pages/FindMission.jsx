import './FindMission.css';

function FindMission() {
  const dummyMissions = [
    {
      title: 'Aide au déménagement',
      location: 'Cotonou - Cadjehoun',
      price: '5000 F CFA',
      date: '2025-08-05',
      description: 'Besoin de 2 jeunes pour déplacer des cartons (1h max)',
    },
    {
      title: 'Garde d’enfants',
      location: 'Porto-Novo - Tokpota',
      price: '7000 F CFA',
      date: '2025-08-08',
      description: '2 enfants à surveiller de 15h à 19h. Maison sécurisée.',
    },
    {
      title: 'Livraison de colis',
      location: 'Calavi - Zogbadjè',
      price: '3000 F CFA',
      date: '2025-08-04',
      description: 'Livrer 3 petits colis dans le même quartier. Moto nécessaire.',
    },
  ];

  return (
    <section className="find-mission-section" data-aos="fade-up">
      <h2>🎯 Missions disponibles</h2>

      <div className="mission-list">
        {dummyMissions.map((mission, index) => (
          <div className="mission-card" key={index}>
            <h3>{mission.title}</h3>
            <p className="location">📍 {mission.location}</p>
            <p className="date">📅 {mission.date}</p>
            <p className="price">💰 {mission.price}</p>
            <p className="description">{mission.description}</p>
            <button className="btn secondary">Postuler</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FindMission;
