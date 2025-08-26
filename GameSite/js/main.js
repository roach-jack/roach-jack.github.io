// Game data structure
const games = [
    {
        id: 'memory-game',
        title: 'Memory Match',
        description: 'Test your memory with this classic card matching game',
        thumbnail: 'images/thumbnails/memory-game.jpg',
        path: 'games/memory-game/',
        featured: true
    },
    {
        id: 'snake-game',
        title: 'Snake Classic',
        description: 'The classic snake game with a modern twist',
        thumbnail: 'images/thumbnails/snake-game.jpg',
        path: 'games/snake-game/',
        featured: false
    }
    // Add more games here
];

// Load games on page load
document.addEventListener('DOMContentLoaded', function() {
    loadGames();
    setupAnalytics();
});

function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;
    
    games.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.onclick = () => window.location.href = game.path;
    
    card.innerHTML = `
        <div class="game-thumbnail" style="background-image: url('${game.thumbnail}')"></div>
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        ${game.featured ? '<span class="featured-badge">Featured</span>' : ''}
    `;
    
    return card;
}

function setupAnalytics() {
    // Google Analytics code will go here
    console.log('Analytics loaded');
}