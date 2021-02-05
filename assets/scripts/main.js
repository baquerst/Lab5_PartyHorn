// main.js

// TODO

var inputBox = document.getElementById("volume-number");
var slider = document.getElementById("volume-slider");

//volume image
var volImage = document.getElementById("volume-image");

//sound image
var soundImage = document.getElementById("sound-image");

//honk button
var honk = document.getElementById("honk-btn");

//radio buttons
var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn"); 
var partyHorn = document.getElementById("radio-party-horn");

//sound
var sound = document.getElementById("horn-sound");

inputBox.oninput = function() {
    slider.value = inputBox.value;
    if (slider.value > 66) {
        volImage.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        sound.volume = slider.value/100;
        honk.disabled = false;
    } else if (slider.value > 33) {
        volImage.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        sound.volume = slider.value/100;
        honk.disabled = false;
    } else if (slider.value > 0) {
        volImage.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        sound.volume = slider.value/100;
        honk.disabled = false;
    } else {
        volImage.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        honk.disabled = true;
    }
}

slider.onchange = function() {
    inputBox.value = slider.value;
    if (inputBox.value > 66) {
        volImage.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        sound.volume = slider.value/100;
        honk.disabled = false;
    } else if (inputBox.value > 33) {
        volImage.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        sound.volume = slider.value/100;
        honk.disabled = false;
    } else if (inputBox.value > 0) {
        volImage.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        sound.volume = slider.value/100;
        honk.disabled = false;
    } else {
        volImage.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        honk.disabled = true;
    }
}

airHorn.onclick = function() {
    soundImage.setAttribute("src", "./assets/media/images/air-horn.svg");
    sound.setAttribute("src", "./assets/media/audio/air-horn.mp3")
}

carHorn.onclick = function() {
    soundImage.setAttribute("src", "./assets/media/images/car.svg");
    sound.setAttribute("src", "./assets/media/audio/car-horn.mp3")
}

partyHorn.onclick = function() {
    soundImage.setAttribute("src", "./assets/media/images/party-horn.svg");
    sound.setAttribute("src", "./assets/media/audio/party-horn.mp3")
}

honk.onclick = function() {
    preventDefault();
    sound.play();
}

honk.addEventListener("click", function(event) {
    event.preventDefault();
    sound.play();
})
