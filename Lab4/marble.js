var marbles = document.querySelectorAll(".marble");
var index = 0;
var timer;

function startAnimation() {
    timer = setInterval(function () {
        marbles[index].src = "./Marbles/gray.jpg";
        index = (index + 1) % marbles.length;
        marbles[index].src = "./Marbles/orange.jpg";
    }, 1000);
}

function stopAnimation() {
    clearInterval(timer);
}

marbles.forEach(function (marble) {
    marble.addEventListener("mouseenter", stopAnimation);
    marble.addEventListener("mouseleave", startAnimation);
});

startAnimation();
