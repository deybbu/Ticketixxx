// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ===== Movie Description Modal =====
const movieData = {
  "TRONBANNER.jpg": {
    title: "Tron: Ares",
    description: "A sequel to the Tron series where Ares enters the human world in a digital war between AI and mankind.",
    trailer: "https://www.youtube.com/embed/F6RrJgDOrVU"
  },
  "CHAINSAWMAN.jpg": {
    title: "Chainsaw Man",
    description: "Denji, a young man with a chainsaw devil inside him, becomes a devil hunter to survive the harsh world of demons.",
    trailer: "https://www.youtube.com/embed/q15CRdE5Bv0"
  },
  "BLACKPHONE.png": {
    title: "The Black Phone",
    description: "A 13-year-old boy is abducted by a sadistic killer, and a disconnected phone helps him communicate with past victims.",
    trailer: "https://www.youtube.com/embed/3eGP6im8AZA"
  },
  "GOODBOY.png": {
    title: "Good Boy",
    description: "A thriller following a man who meets a mysterious girl whose dark past reveals a terrifying secret.",
    trailer: "https://www.youtube.com/embed/ujbC2-6B3s4"
  },
  "QUEZON.jpg": {
    title: "Quezon",
    description: "A historical drama portraying the life and leadership of Manuel L. Quezon, the first President of the Philippines.",
    trailer: "https://www.youtube.com/embed/7pVRwLaz1U4"
  },
  "ONEINAMILLION.png": {
    title: "One in a Million",
    description: "A romantic story that follows two strangers who cross paths and change each other's lives forever.",
    trailer: "https://www.youtube.com/embed/4Mi5lB6yQfQ"
  },
  "SHELBY.png": {
    title: "Shelby",
    description: "An inspiring drama about a young racer who defies all odds to reach the finish line.",
    trailer: "https://www.youtube.com/embed/VkX7dHjL-aY"
  },
  "NOWYOUSEEME.jpg": {
    title: "Now You See Me 3",
    description: "The Four Horsemen return for another mind-bending performance — this time, the stakes are global.",
    trailer: "https://www.youtube.com/embed/KzJNYYkkhzc"
  },
  "PREDATOR.jpg": {
    title: "Predator: Resurrection",
    description: "A new breed of Predator emerges in a future war between humans and alien hunters.",
    trailer: "https://www.youtube.com/embed/94wSWlY4t3Q"
  },
  "MEETGREETBYE.jpg": {
    title: "Meet, Greet, Bye",
    description: "A heartfelt drama about love, loss, and finding closure in unexpected ways.",
    trailer: "https://www.youtube.com/embed/8EJ3zbKTWQ8"
  }
};

// ===== Movie Modal Functionality =====
const movieBanners = document.querySelectorAll('.movie img');
const movieModal = document.getElementById('movieModal');
const closeModal = document.getElementById('closeModal');
const modalPoster = document.getElementById('modalPoster');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTrailer = document.getElementById('modalTrailer');

movieBanners.forEach(img => {
  img.addEventListener('click', () => {
    const filename = img.src.split('/').pop();
    const movie = movieData[filename];

    if (movie) {
      modalPoster.src = img.src;
      modalTitle.textContent = movie.title;
      modalDescription.textContent = movie.description;
      modalTrailer.src = movie.trailer;
      movieModal.style.display = 'flex';
    }
  });
});

closeModal.addEventListener('click', () => {
  movieModal.style.display = 'none';
  modalTrailer.src = '';
});

window.addEventListener('click', (e) => {
  if (e.target === movieModal) {
    movieModal.style.display = 'none';
    modalTrailer.src = '';
  }
});
