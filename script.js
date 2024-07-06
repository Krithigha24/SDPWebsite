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





window.addEventListener('scroll', function() {
    var popupBox = document.getElementById('popup-box');
    if (window.scrollY > 100) { // Adjust the scroll position as needed
        popupBox.style.display = 'flex';
    } else {
        popupBox.style.display = 'none';
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const images = document.querySelectorAll('.sareeImage');
    const totalImages = images.length;
    const visibleImages = 4;
    let currentIndex = visibleImages; // Start at the first actual image after the clones
    const scrollUnit = 290; // Adjust as needed based on image width and margin
    const transitionTime = 500;

    function updateCarousel() {
        const offset = currentIndex * scrollUnit;
        carousel.style.transition = `transform ${transitionTime}ms ease`;
        carousel.style.transform = `translateX(-${offset}px)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
        if (currentIndex >= totalImages - visibleImages) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                currentIndex = visibleImages;
                updateCarousel();
            }, transitionTime);
        }
    });

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
        if (currentIndex < visibleImages) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                currentIndex = totalImages - visibleImages * 2;
                updateCarousel();
            }, transitionTime);
        }
    });

    updateCarousel();
});

