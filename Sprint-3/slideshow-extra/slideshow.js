document.addEventListener('DOMContentLoaded', () => {
  const images = [
      "./assets/cute-cat-a.png",
      "./assets/cute-cat-b.jpg",
      "./assets/cute-cat-c.jpg",
  ];

  let currentIndex = 0;
  let intervalId = null;
  let delay = 2000; // Default delay in milliseconds

  const carouselImg = document.getElementById('carousel-img');
  const forwardBtn = document.getElementById('forward-btn');
  const backwardBtn = document.getElementById('backward-btn');
  const autoForwardBtn = document.getElementById('auto-forward');
  const autoBackBtn = document.getElementById('auto-backward');
  const stopBtn = document.getElementById('stop');

  function updateImage() {
      carouselImg.src = images[currentIndex];
  }

  function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
  }

  function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
  }

  function startAutoForward() {
      if (intervalId) {
          clearInterval(intervalId);
      }
      intervalId = setInterval(nextImage, delay);
      autoForwardBtn.disabled = true;
      autoBackBtn.disabled = true;
  }

  function startAutoBackward() {
      if (intervalId) {
          clearInterval(intervalId);
      }
      intervalId = setInterval(prevImage, delay);
      autoForwardBtn.disabled = true;
      autoBackBtn.disabled = true;
  }

  function stopAuto() {
      if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
      }
      autoForwardBtn.disabled = false;
      autoBackBtn.disabled = false;
  }

  forwardBtn.addEventListener('click', nextImage);
  backwardBtn.addEventListener('click', prevImage);
  autoForwardBtn.addEventListener('click', startAutoForward);
  autoBackBtn.addEventListener('click', startAutoBackward);
  stopBtn.addEventListener('click', stopAuto);

  updateImage();
});