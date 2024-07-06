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

	let isDragging = false, 
		startX, 
		startScrollLeft, 
		timeoutId; 

	const dragStart = (e) => { 
		isDragging = true; 
		carousel.classList.add("dragging"); 
		startX = e.pageX; 
		startScrollLeft = carousel.scrollLeft; 
	}; 

	const dragging = (e) => { 
		if (!isDragging) return; 
	
		// Calculate the new scroll position 
		const newScrollLeft = startScrollLeft - (e.pageX - startX); 
	
		// Check if the new scroll position exceeds 
		// the carousel boundaries 
		if (newScrollLeft <= 0 || newScrollLeft >= 
			carousel.scrollWidth - carousel.offsetWidth) { 
			
			// If so, prevent further dragging 
			isDragging = false; 
			return; 
		} 
	
		// Otherwise, update the scroll position of the carousel 
		carousel.scrollLeft = newScrollLeft; 
	}; 

	const dragStop = () => { 
		isDragging = false; 
		carousel.classList.remove("dragging"); 
	}; 

	const autoPlay = () => { 
	
		// Return if window is smaller than 800 
		if (window.innerWidth < 800) return; 
		
		// Calculate the total width of all cards 
		const totalCardWidth = carousel.scrollWidth; 
		
		// Calculate the maximum scroll position 
		const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
		
		// If the carousel is at the end, stop autoplay 
		if (carousel.scrollLeft >= maxScrollLeft) return; 
		
		// Autoplay the carousel after every 2500ms 
		timeoutId = setTimeout(() => 
			carousel.scrollLeft += firstCardWidth, 2500); 
	}; 

	carousel.addEventListener("mousedown", dragStart); 
	carousel.addEventListener("mousemove", dragging); 
	document.addEventListener("mouseup", dragStop); 
	wrapper.addEventListener("mouseenter", () => 
		clearTimeout(timeoutId)); 
	wrapper.addEventListener("mouseleave", autoPlay); 

	// Add event listeners for the arrow buttons to 
	// scroll the carousel left and right 
	arrowBtns.forEach(btn => { 
		btn.addEventListener("click", () => { 
			carousel.scrollLeft += btn.id === "carousel_prev" ? 
				-firstCardWidth : firstCardWidth; 
		}); 
	}); 
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

