const playSong = (event) => {
    const key = event.keyCode || event.target.getAttribute("data-key");
    const btn = document.querySelector(`button[data-key="${key}"]`);
    if (!btn) return;

    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    btn.classList.add("behaviour");
};

const drumKeys = Array.from(document.querySelectorAll("section div button"));

drumKeys.forEach((element) => {
    element.addEventListener("click", playSong);

    element.addEventListener("transitionend", (event) => {
        if (event.propertyName !== "transform") return;
        event.target.classList.remove("behaviour");
    });
});

window.addEventListener("keydown", playSong);