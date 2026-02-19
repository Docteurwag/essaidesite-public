document.addEventListener('DOMContentLoaded', () => {
    // === CONFIGURATION ===
    const YT_API_KEY = 'VOTRE_API_KEY'; // <-- À remplacer
    const CHANNEL_ID = 'UCQw6QwOQp6r6Qw6QwOQp6r6Q'; // <-- À remplacer par l'ID de la chaîne

    // === PLAYLISTS ===
    const playlistsDiv = document.getElementById('youtube-playlists');
    if (playlistsDiv) {
        fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=8&key=${YT_API_KEY}`)
            .then(r => r.json())
            .then(data => {
                if (data.items) {
                    data.items.forEach(pl => {
                        const card = document.createElement('div');
                        card.className = 'card';
                        card.innerHTML = `
                            <img src="${pl.snippet.thumbnails.medium.url}" alt="${pl.snippet.title}">
                            <div class="card-info">
                                <h3>${pl.snippet.title}</h3>
                                <p>${pl.snippet.description.substring(0, 80)}...</p>
                            </div>
                        `;
                        playlistsDiv.appendChild(card);
                    });
                }
            });
    }

    // === DERNIÈRES VIDÉOS ===
    const latestDiv = document.getElementById('youtube-latest-videos');
    if (latestDiv) {
        fetch(`https://www.googleapis.com/youtube/v3/search?key=${YT_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=8`)
            .then(r => r.json())
            .then(data => {
                if (data.items) {
                    data.items.filter(item => item.id.kind === 'youtube#video').forEach(video => {
                        const card = document.createElement('div');
                        card.className = 'card';
                        card.innerHTML = `
                            <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
                                <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
                                <div class="card-info">
                                    <h3>${video.snippet.title}</h3>
                                    <p>${video.snippet.description.substring(0, 80)}...</p>
                                </div>
                            </a>
                        `;
                        latestDiv.appendChild(card);
                    });
                }
            });
    }

    // === BOUTON DON (optionnel: scroll to top) ===
    // ...existing code...
});
        .then(response => response.json())
        .then(categories => {
            const section = document.createElement('section');
            section.innerHTML = '<h2>Catégories</h2>';
            const list = document.createElement('ul');
            categories.forEach(cat => {
                const li = document.createElement('li');
                li.textContent = cat.name;
                list.appendChild(li);
            });
            section.appendChild(list);
            document.body.insertBefore(section, grid.parentElement.nextSibling);
        });
});
