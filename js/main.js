const home = document.querySelector(".home");
const game = document.querySelector(".game");
const playButton = document.querySelector(".home__play-btn");

playButton.addEventListener("click",(e) => {
    document.body.style.backgroundImage = "url('./images/rps-5.webp')";
    home.classList.add("disappear");
    game.classList.remove("disappear");
    console.log("play button clicked");
})