document.addEventListener('DOMContentLoaded', function() {
	// Animation d'accueil
	const hero = document.querySelector('.hero');
	if(hero) {
		hero.style.opacity = 0;
		setTimeout(() => { hero.style.transition = 'opacity 1s'; hero.style.opacity = 1; }, 200);
	}
	// Message console
	console.log('Chaîne TV Catholique - site lancé');
});
