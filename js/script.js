$(document).ready(function() {
    // Initialize the panel
    $('#favoritesPanel').panel();

    // Load favorites from local storage on page load
    loadFavorites();

    // Handle form submission
    $('#favoriteForm').submit(function(event) {
        event.preventDefault();
        var game = $('#gameInput').val();
        if (game.trim() !== '') {
            addFavorite(game);
            $('#gameInput').val('');
        }
    });

    // Handle clear favorites button click
    $('#clearFavorites').click(function() {
        clearFavorites();
    });
});

// Function to load favorites from local storage
function loadFavorites() {
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    var list = $('#favoriteList');
    list.empty();
    favorites.forEach(function(game) {
        list.append('<li>' + game + '</li>');
    });
}

// Function to add a favorite game to the favorites list
function addFavorite(game) {
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(game);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    loadFavorites();
}

// Function to clear the favorites list
function clearFavorites() {
    localStorage.removeItem('favorites');
    $('#favoriteList').empty();
}
