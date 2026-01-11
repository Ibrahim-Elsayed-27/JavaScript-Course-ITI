
var imgElement = document.getElementById("slideshowImage");
console.log("Slideshow script loaded");
var imgCounter = 1;
var numberOfImages = 6;
var imagesSourcePath = "imgs/";
var slideshowInterval = null;
var slideshowDelay = 2000; 


function showPrevImage() {
    console.log("Showing previous image");
    imgCounter--;
    if (imgCounter < 1) {
        imgCounter = numberOfImages;
    }
    imgElement.src = imagesSourcePath + imgCounter + ".jpg";
}

function showNextImage() {
    console.log("Showing next image");
    imgCounter++;
    if (imgCounter > numberOfImages) {
        imgCounter = 1;
    }   
    imgElement.src = imagesSourcePath + imgCounter + ".jpg";
}

function startSlideshow() {
    console.log("Starting slideshow");
    slideshowInterval = setInterval(showNextImage, slideshowDelay);

}

function stopSlideshow() {
    console.log("Stopping slideshow");
    clearInterval(slideshowInterval);
}