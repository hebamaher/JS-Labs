var images = ["./SlideShow/1.jpg", "./SlideShow/2.jpg", "./SlideShow/3.jpg", "./SlideShow/4.jpg", "./SlideShow/5.jpg", "./SlideShow/6.jpg"];
var index = 0;
var img = document.getElementById("gallery");
var timer = null;

function showImage() {
    img.src = images[index];
}

function next() {
    if (index < images.length - 1) {
        index++;
        showImage();
    }
}

function prev() {
    if (index > 0) {
        index--;
        showImage();
    }
}

function startSlideshow() {
    if (timer !== null) return; // prevent multiple intervals (if not null, slideshow is already running)

    timer = setInterval(function () {
        index++;
        if (index === images.length) {
            index = 0; // circulate to first image
        }
        showImage();
    }, 2000);
}

function stopSlideshow() {
    clearInterval(timer);
    timer = null;
}
