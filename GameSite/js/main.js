// Game data structure
const games = [
    {
        id: 'memory-game',
        title: 'Memory Match',
        description: 'Test your memory with this classic card matching game',
        thumbnail: 'images/thumbnails/memory-game.jpg',
        path: 'apps/memory-game/',
        featured: true
    },
    {
        id: 'snake-game',
        title: 'Snake Classic',
        description: 'The classic snake game with a modern twist',
        thumbnail: 'images/thumbnails/snake-game.jpg',
        path: 'apps/snake-game/',
        featured: false
    },
      {
        id: 'tic-tac-toe',
        title: 'Tic Tac Toe',
        description: 'Classic strategy game - play against friends or challenge the AI!',
        thumbnail: 'images/thumbnails/tic-tac-toe.jpg',
        path: 'apps/tictactoe/',
        featured: true
    },
    {
        id: 'pet-dogs',
        title: 'Pet My Dogs',
        description: 'Give Navi and Henley some virtual love! Watch them react to your pets.',
        thumbnail: 'images/thumbnails/pet-dogs.jpg',
        path: 'apps/pet-dogs/',
        featured: true
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