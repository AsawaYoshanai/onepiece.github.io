function toggleMenu() {
    const header = document.getElementById('main-header');
    header.classList.toggle('transparent');
    var mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show');
}

function openLink() {
    // Replace 'your-link-url' with the actual URL you want to open
    window.location.href = 'Index.html';
}

document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('main-header');

    window.addEventListener('scroll', function () {
        if (window.scrollY === 0) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var playAudio = document.getElementById('playAudio');
    var audioPlayer = document.getElementById('audioPlayer');

    playAudio.addEventListener('click', function () {
        audioPlayer.play();
    });
});