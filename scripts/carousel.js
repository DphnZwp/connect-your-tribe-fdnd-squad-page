// slide show carousel
const track = document.querySelector('.carousel')
const slides = Array.from(track.children)
const nextbtn = document.querySelector('.carousel_btn--right')
const prevbtn =document.querySelector('.carousel_btn--left')
const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth)
// arrange the slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
// slides.forEach((slide,index) => {
//     slide.style.left = slideWidth * index + 'px';
// })
const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px';

}

slides.forEach(setSlidePosition);
// meaking one function to use it for two buttons
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide')
    
}
// When click the left button
 prevbtn.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide,prevSlide);
 })

// When click the right button
nextbtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    // const amountToMove = nextSlide.style.left;
    // // move to the next slide
    // track.style.transform = 'translateX(-' + amountToMove + ')';
    // currentSlide.classList.remove('current-slide');
    // nextSlide.classList.add('current-slide')
})
