document.addEventListener('DOMContentLoaded', function() {
	// Animation d'accueil
	const hero = document.querySelector('.hero');
	if(hero) {
		hero.style.opacity = 0;
		setTimeout(() => { hero.style.transition = 'opacity 1s'; hero.style.opacity = 1; }, 200);
	}
	// Récupération des actualités
	fetch('http://127.0.0.1:8081/api/actualites/')
		.then(response => response.json())
		.then(data => {
			const actusList = document.getElementById('actus-list');
			actusList.innerHTML = '';
			data.forEach(actu => {
				const card = document.createElement('div');
				card.className = 'card';
				card.innerHTML = `<h3>${actu.titre}</h3><p>${actu.contenu}</p><small>${new Date(actu.date_pub).toLocaleString()}</small>`;
				actusList.appendChild(card);
			});
		});
	// Récupération des programmes
	fetch('http://127.0.0.1:8081/api/programmes/')
		.then(response => response.json())
		.then(data => {
			const grilleList = document.getElementById('grille-list');
			grilleList.innerHTML = '';
			data.forEach(prog => {
				const card = document.createElement('div');
				card.className = 'card';
				card.innerHTML = `<h3>${prog.titre}</h3><p>${prog.description}</p><small>${prog.jour} | ${prog.heure_debut} - ${prog.heure_fin}</small>`;
				grilleList.appendChild(card);
			});
		});
	// Message console
	console.log('Frontend Chaîne TV Catholique');
});
