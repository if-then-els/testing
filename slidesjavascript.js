const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(-cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = e => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
};

const dragging = e => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft + (startX - e.pageX);
};

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
};

const autoPlay = () => {
    if (window.innerWidth < 800) return; // Return if window is less than 800
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => {
        carousel.scrollLeft += firstCardWidth;
        autoPlay(); // Restart autoplay after each cycle
    }, 2500);
};

autoPlay();

const infinitescroll = () => {
    // Your infinite scroll logic
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infinitescroll);

// Detect hover state and manage autoplay
wrapper.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
});

wrapper.addEventListener("mouseleave", () => {
    if (!isDragging) {
        autoPlay();
    }
});
