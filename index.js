// Start point
let i = 0; 
const images = [];
const time = 3600; 

// Images list
images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';
images[3] = 'image4.jpg';
images[4] = 'image5.jpg';
images[5] = 'image6.jpg';
images[6] = 'image7.jpg';
images[7] = 'image8.jpg';
images[8] = 'image9.jpg';
images[9] = 'image10.jpg';

// Change image function
function changeSlides(){
    document.slide.src = images[i];

    // images.length will be 5 because there are 5 different indexes, but because the indexes are zero-based, we want to check if it's the last index of 4, so you need to take away 1
    // if it's NOT the last index, go to the next index

    if(i < images.length - 1){
        i++;
    } else {  // if it IS the last index, reset it to zero
        i=0;
    }

    setTimeout("changeSlides()", time);
}


// Function runs when page loads
window.onload = changeSlides;