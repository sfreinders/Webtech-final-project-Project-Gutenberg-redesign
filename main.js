/* ==========================================================================
   main.js — Project Gutenberg Redesign
   
   FUNCTIONS (each works on a TYPE of element, not a single one):
   1. setActiveNavLink()  — highlights the current page's nav link
   2. initScrollToTop()   — scroll-to-top button in bottom-right corner
   3. initBookSliders()   — auto-scrolls all book carousels left to right
   ========================================================================== */



/* --------------------------------------------------------------------------
   1. ACTIVE NAV LINK
   Adds class "active" to the nav link that matches the current page URL.
   Works on ALL .main-links a and .tertiary-link elements.
   WHY: Users always know where they are on the site (Nielsen heuristic #1:
   visibility of system status).

   SOURCES:
   - Own implementation.
   - window.location.pathname (reads current page URL):
     https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname
   - classList.add() (adds a CSS class to an element):
     https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
   - querySelectorAll() (selects all matching elements):
     https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
-------------------------------------------------------------------------- */
function setActiveNavLink() {
  var currentPage = decodeURIComponent(window.location.pathname.split("/").pop()) || "index.html";
  var navLinks = document.querySelectorAll(".main-links a, .tertiary-link");

  navLinks.forEach(function (link) {
    var linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}



/* --------------------------------------------------------------------------
   2. SCROLL TO TOP BUTTON
   Shows a round button in the bottom-right corner when the user scrolls
   more than 300px down. Clicking it scrolls smoothly back to the top.
   Works on ALL pages that contain #scrollTopBtn.
   WHY: Long pages like bookshelves and about need easy top navigation.

   SOURCES:
   - Scroll to top concept and structure:
     https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
   - Fade-in button with CSS class toggle (instead of inline style):
     https://www.keurigonline.nl/blog/back-to-top-button
   - window.scrollY (reads current vertical scroll position):
     https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
   - window.scrollTo() with behavior: "smooth":
     https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
   - classList.add() / classList.remove():
     https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
-------------------------------------------------------------------------- */
function initScrollToTop() {
  var btn = document.getElementById("scrollTopBtn");
  if (!btn) return;

  /* Show button when user has scrolled more than 300px */
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  /* Scroll smoothly back to the top when button is clicked */
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}



/* --------------------------------------------------------------------------
   3. BOOK SLIDER
   Auto-scrolls ALL .lib.latest carousels continuously from left to right.
   Pauses when the user hovers so they can read titles and click a book.
   Loops back to the start when the end of the carousel is reached.
   WHY: Communicates that more books exist off-screen without requiring
   manual interaction from the user and give it a modern look. 

   SOURCES:
   - Own implementation combining the following Web APIs:
   - requestAnimationFrame() — smooth 60fps animation loop:
     https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
   - cancelAnimationFrame() — stops the loop on mouseenter:
     https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame
   - scrollLeft — reads and sets horizontal scroll position:
     https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
   - scrollWidth — total scrollable width including off-screen content:
     https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth
   - clientWidth — visible width of the element:
     https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth
-------------------------------------------------------------------------- */
function initBookSliders() {
  var sliders = document.querySelectorAll(".lib.latest");

  sliders.forEach(function (slider) {
    var speed = 0.6; /* pixels per animation frame — change for faster/slower */
    var animId;

    function scrollStep() {
      /* Jump back to start when the end of the slider is reached */
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += speed;
      }
      animId = requestAnimationFrame(scrollStep);
    }

    /* Start the auto-scroll immediately when the page loads */
    animId = requestAnimationFrame(scrollStep);

    /* Pause scrolling when the user moves their mouse over the slider */
    slider.addEventListener("mouseenter", function () {
      cancelAnimationFrame(animId);
    });

    /* Resume scrolling when the mouse leaves the slider */
    slider.addEventListener("mouseleave", function () {
      animId = requestAnimationFrame(scrollStep);
    });
  });
}
// Masonry layout for bookshelves
function masonryLayout() {
  const grid = document.querySelector('.bookshelves');
  if (!grid) return;

  const items = Array.from(grid.querySelectorAll('.book-list'));
  const columnCount = Math.round(grid.offsetWidth / 290);
  const columns = Array(columnCount).fill(0);

  items.forEach(item => {
    item.style.position = 'absolute';
    const shortestCol = columns.indexOf(Math.min(...columns));
    const x = shortestCol * (grid.offsetWidth / columnCount);
    const y = columns[shortestCol];
    item.style.left = x + 'px';
    item.style.top = y + 'px';
    item.style.width = (grid.offsetWidth / columnCount - 30) + 'px';
    columns[shortestCol] += item.offsetHeight + 30;
  });

  grid.style.height = Math.max(...columns) + 'px';
}

window.addEventListener('load', masonryLayout);
window.addEventListener('resize', masonryLayout);



/* --------------------------------------------------------------------------
   Initialize all functions after the full HTML document has loaded.
   DOMContentLoaded ensures all elements exist in the DOM before JS runs.
   SOURCE:
   https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
-------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  setActiveNavLink();
  initScrollToTop();
  initBookSliders();
  initmasonryLayout();
});