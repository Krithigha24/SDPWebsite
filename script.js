/****************************************************************HERO BANNER SLIDES**********************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.hero_slide');
    const totalSlides = slides.length;
    const nextButton = document.querySelector('.hero_next');
    const prevButton = document.querySelector('.hero_prev');
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.style.left = '100%';
            if (i === index) {
                slide.classList.add('active');
                slide.style.left = '0';
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
        resetTimer();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
        resetTimer();
    }

    function resetTimer() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 9000);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Automatically move to the next slide every 9 seconds
    slideInterval = setInterval(nextSlide, 9000);

    // Initialize the first slide
    showSlide(currentIndex);
});
/*****************************************************************NEW ARRIVAL SAREE CAROUSEL************************************************************************ */
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".saree_carousel");
    const arrowBtns = document.querySelectorAll(".saree_wrapper i");
    const wrapper = document.querySelector(".saree_wrapper");

    const firstCard = carousel.querySelector(".saree");
    const firstCardWidth = firstCard.offsetWidth;

    let scrollInterval = setInterval(scrollRight, 6000);

    wrapper.addEventListener("mouseenter", () => {
        clearInterval(scrollInterval); // Disable the timer
    });

    wrapper.addEventListener("mouseleave", () => {
        scrollInterval = setInterval(scrollRight, 9000); // Re-enable the timer
    });

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.id === "carousel_prev") {
                scrollLeft();
            } else {
                scrollRight();
            }
        });
    });

    function scrollLeft(){
        if (carousel.scrollLeft === 0) { // Left click when at the start of scrollbar
            carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth;
        } else {
            carousel.scrollLeft -= firstCardWidth;
        }
    }

    function scrollRight(){
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
            carousel.scrollLeft = 0;// Scroll to the beginning
        } else {
            carousel.scrollLeft += firstCardWidth;// Scroll right
        }
    }
});
/*********************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
    const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
        addAnimation();
    }

    function addAnimation(){
        scrollers.forEach((scroller) =>{
            scroller.setAttribute("data-animated",true);

            const scrollerInner = scroller.querySelector(".scroller_inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden",true);
                scrollerInner.appendChild(duplicatedItem);
            })
        });
    }
});

/*********************************************************POPUP BOX************************************************************************************/
window.addEventListener('scroll', function() {
    var popupBox = document.getElementById('popup-box');
    if (window.scrollY > 100) { // Adjust the scroll position as needed
        popupBox.style.display = 'flex';
    } else {
        popupBox.style.display = 'none';
    }
});