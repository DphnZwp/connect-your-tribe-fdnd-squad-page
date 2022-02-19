// Slide show carousel
const track = document.querySelector('.carousel')
const slides = Array.from(track.children)
const nextbtn = document.querySelector('.carousel__btn--right')
const prevbtn =document.querySelector('.carousel__btn--left')
const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px';

}

slides.forEach(setSlidePosition);
// Making one function to use it for two buttons
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide')
    
}
// When you click the left button
 prevbtn.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide,prevSlide);
 })

// When you click the right button
nextbtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
})