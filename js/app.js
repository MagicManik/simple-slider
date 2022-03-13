const images = [
    'images/slider (1).png',
    'images/slider (2).png',
    'images/slider (3).png'
];

const sliderImage = document.getElementById('slider-image');

let imageIndex = 0;

setInterval(() => {
    if (imageIndex === images.length) {
        imageIndex = 0;
    }
    sliderImage.setAttribute('src', images[imageIndex])
    imageIndex++;
}, 1000);