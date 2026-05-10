const heroVideo = document.getElementById('heroVideo');
const heroFade = document.getElementById('heroFade');

const heroPlaylist = [
  'https://res.cloudinary.com/dfsb64te4/video/upload/v1778333594/hairdresser2_i39lur.mp4',
  'https://res.cloudinary.com/dfsb64te4/video/upload/v1778332451/hairdresser_rsf69b.mp4'
];
let heroIndex = 0;

if (heroVideo && heroFade) {
  heroVideo.addEventListener('timeupdate', () => {
    if (heroVideo.duration && heroVideo.currentTime >= heroVideo.duration - 1) {
      heroFade.style.opacity = 1;
    }
  });

  heroVideo.addEventListener('ended', () => {
    heroIndex = (heroIndex + 1) % heroPlaylist.length;
    heroVideo.src = heroPlaylist[heroIndex];
    heroVideo.load();
    heroVideo.play();
    setTimeout(() => {
      heroFade.style.opacity = 0;
    }, 200);
  });
}

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
