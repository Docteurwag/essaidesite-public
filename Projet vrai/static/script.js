document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('video-grid');
    fetch('http://127.0.0.1:8000/api/programs/')
        .then(response => response.json())
        .then(data => {
            data.forEach(program => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${program.thumbnail}" alt="${program.title}">
                    <div class="card-info">
                        <h3 class="card-title">${program.title}</h3>
                        <p>${program.description.substring(0, 50)}...</p>
                    </div>
                `;
                grid.appendChild(card);
            });
        })
        .catch(error => console.error('Erreur:', error));
});
