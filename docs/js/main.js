// Game data structure
const games = [
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
    },
    {
        id: 'orbit-simulator',
        title: 'Planetary Orbit Simulator',
        description: 'Create your own solar system! Place up to 6 celestial bodies and watch realistic gravitational physics in action.',
        thumbnail: 'images/thumbnails/orbit-simulator.jpg',
        path: 'apps/orbit-simulator/',
        featured: true
    },
    {
        id: 'survival-islands',
        title: 'Island Survival',
        description: 'Gather resources and adapt to survive this island challenge',
        thumbnail: 'images/thumbnails/island-survival.jpg',
        path: 'apps/survival-islands/',
        featured: true
    },
    {
        id: 'impossible-captcha',
        title: 'Are you a human?',
        description: 'Answer a few simple questions to prove you are a human',
        thumbnail: 'images/thumbnails/impossible-captcha.jpg',
        path: 'apps/impossible-captcha/',
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