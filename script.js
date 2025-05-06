// Rotating Testimonials
const quotes = document.querySelectorAll('.testimonial-slider blockquote');
let currentQuote = 0;

function showNextQuote() {
  quotes[currentQuote].classList.remove('active');
  currentQuote = (currentQuote + 1) % quotes.length;
  quotes[currentQuote].classList.add('active');
}

// Initial display
quotes[0].classList.add('active');
setInterval(showNextQuote, 5000); // Change every 5 seconds
// Lightbox Functionality
const galleryImages = document.querySelectorAll('.gallery-container img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}

// Auto-rotate every 5 seconds
setInterval(nextTestimonial, 5000);
