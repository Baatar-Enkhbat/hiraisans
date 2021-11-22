// const menuToggle = document.querySelector('.toggle');
// const showcase = document.querySelector('.showcase');

// menuToggle.addEventListener('click', () => {
//     menuToggle.classList.toggle('active');
//     showcase.classList.toggle('active');
// })

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}