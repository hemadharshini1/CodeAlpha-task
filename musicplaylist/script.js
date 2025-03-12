const songs = [
    { title: "Lover", src: "c:/Users/HEMA/Downloads/Lover - Ladies And Gentlemen.mp3", cover: "c:\Users\HEMA\OneDrive\Desktop\Taylor_Swift_-_Lover.png" },
    { title: "Cruel Summer", src: "c:/Users/HEMA/Downloads/Cruel Summer-MobCup.vip.mp3", cover: "c:\Users\HEMA\OneDrive\Desktop\cruelsummer.jpg" },
    { title: "Fortnight", src: "c:/Users/HEMA/Downloads/Fortnight-MobCup.vip.mp3", cover: "c:\Users\HEMA\OneDrive\Desktop\fortnight.jpg" }
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const songTitle = document.getElementById("song-title");
const albumArt = document.getElementById("album-art");

function loadSong(index) {
    songTitle.textContent = songs[index].title;
    audio.src = songs[index].src;
    albumArt.src = songs[index].cover;
    audio.play();
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
}

function login() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("player-container").style.display = "block";
}

function showRegister() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "block";
}

function showLogin() {
    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
}

function register() {
    alert("Registration successful! Please login.");
    showLogin();
}
