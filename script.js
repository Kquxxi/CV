function toggleMenu() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('show-menu');
}

function openPopup(imageSrc, title, description) {
    document.getElementById('popup-image').src = imageSrc;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function toggleTheme() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('dark-mode');

    var links = document.querySelectorAll('#navbar a');
    links.forEach(link => {
        link.classList.toggle('dark-mode');
    });

    var tiles = document.querySelectorAll('.project-tile, .skill-tile');
    tiles.forEach(tile => {
        tile.classList.toggle('dark-mode');
    });

    var contactButton = document.getElementById('contact-me-btn');
    contactButton.classList.toggle('dark-mode');
}
