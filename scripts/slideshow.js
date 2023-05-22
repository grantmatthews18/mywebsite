let totalSlides = 2;
let currSlide = 1;

//This is janky af but it technically works so I am leaving it
document.getElementById('article1').parentElement.parentElement.classList.add('showSlide1');

function nextSlide(x) {
    x.parentElement.classList.remove('showSlide'+ currSlide);
    if(currSlide === totalSlides){
        currSlide = 1;
    }
    else{
        currSlide += 1
    }
    x.parentElement.classList.add('showSlide'+ currSlide);
    document.getElementById('debugnum').innerHTML = currSlide;
}

function previousSlide(x){
    x.parentElement.classList.remove('showSlide'+ currSlide);
    if(currSlide === 1){
        currSlide = totalSlides;
    }
    else{
        currSlide-= 1;
    }
    x.parentElement.classList.add('showSlide'+ currSlide);
    document.getElementById('debugnum').innerHTML = currSlide;
}