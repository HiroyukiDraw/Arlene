const hamburger = document.getElementById('hamburger');

const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Optional: Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });

  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
      navLinks.style.top = (70 + window.scrollY) + 'px';
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.style.top = '70px';
    }
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    form.reset();
    successMessage.style.display = 'block';
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  });

   // Image zoom modal functionality
   const galleryImages = document.querySelectorAll('.image-gallery img');
  const imageModal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      imageModal.style.display = 'flex';
    });
  });

  imageModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
  });

  // Back to top button functionality
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });