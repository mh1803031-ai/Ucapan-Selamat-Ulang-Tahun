// Status
let confettiFired = false;

// Warna hati romantis
const heartColors = ['#ff6b9d', '#ff4081', '#d147a3', '#f8a5c2', '#c2185b'];

// === Buat Hati (bentuk hati asli) ===
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  const size = Math.random() * 20 + 20;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  heart.style.backgroundColor = heartColors[Math.floor(Math.random() * heartColors.length)];
  heart.style.animationDuration = (Math.random() * 8 + 12) + 's';
  heart.style.animationDelay = (Math.random() * 5) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 20000);
}

// === Debu Cinta ===
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.opacity = 0.7;
  sparkle.style.animationDuration = (Math.random() * 8 + 10) + 's';
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 12000);
}

// Jalankan animasi hati dan debu
setInterval(createHeart, 1000);
setInterval(createSparkle, 700);
createHeart();

// === Efek Konfeti ===
function throwConfetti(x, y, count) {
  const colors = ['#ff6b9d', '#ff4081', '#d147a3', '#f8a5c2', '#c2185b', '#ffeb3b', '#4fc3f7'];
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';
    const size = Math.random() * 10 + 6;
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.clipPath = "path('M10,0 C12,0 14,2 14,4 C14,6 12,8 10,10 C6,8 4,6 4,4 C4,2 6,0 10,0 Z')";
    const vx = (Math.random() - 0.5) * 14;
    const vy = (Math.random() - 0.5) * 14 - 8;
    let opacity = 1;
    document.body.appendChild(confetti);
    let posX = x, posY = y;
    const animate = () => {
      posX += vx; posY += vy; opacity -= 0.015;
      confetti.style.opacity = opacity;
      confetti.style.transform = `translate(${posX - x}px, ${posY - y}px) rotate(${Math.random() * 360}deg) scale(${opacity})`;
      if (opacity > 0) requestAnimationFrame(animate);
      else confetti.remove();
    };
    animate();
  }
}

// === Tombol Konfeti ===
const confettiBtn = document.getElementById('confettiBtn');
confettiBtn.addEventListener('click', function(e) {
  if (!confettiFired) {
    throwConfetti(e.clientX, e.clientY, 60);
    confettiFired = true;
    confettiBtn.textContent = "Lanjutkan... 💫";
    confettiBtn.style.background = "linear-gradient(45deg, #4CAF50, #8BC34A)";
  } else {
    document.getElementById('slide1').classList.remove('active');
    document.getElementById('slide2').classList.add('active');
  }
});

// === Tombol Akhir: Buka Modal Ucapan ===
const finalBtn = document.getElementById('finalBtn');
const galleryModal = document.getElementById('galleryModal');

finalBtn.addEventListener('click', () => {
  galleryModal.classList.add('active');
});

// Tutup modal jika klik di luar konten
galleryModal.addEventListener('click', (e) => {
  if (e.target === galleryModal) {
    galleryModal.classList.remove('active');
  }
});

// Mainkan musik saat pengguna mengklik
document.addEventListener('click', function playAudio() {
  const audio = document.getElementById('birthdaySong');
  audio.play().catch(e => console.log("Autoplay terblokir:", e));
  document.removeEventListener('click', playAudio);
}, { once: true });
// Ambil elemen foto
const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const photo3 = document.getElementById("photo3");
const nextToModalBtn = document.getElementById("nextToModal");
const slide3 = document.getElementById("slide3");
const gallerymodal = document.getElementById("galleryModal");
const audio = document.getElementById("birthdaySong");

// Efek hover: reset rotasi saat hover
if (photo1 && photo2 && photo3) {
  const frames = [photo1, photo2, photo3];
  const originals = ["rotate(-5deg)", "rotate(2deg)", "rotate(-3deg)"];

  frames.forEach((frame, index) => {
    frame.addEventListener("mouseenter", () => {
      frame.style.transform = "rotate(0deg) scale(1.05)";
    });

    frame.addEventListener("mouseleave", () => {
      frame.style.transform = originals[index];
    });
  });
}

// Tombol lanjut ke modal
if (nextToModalBtn) {
  nextToModalBtn.addEventListener("click", () => {
    slide3.classList.remove("active");
    galleryModal.classList.add("active");
    audio.play().catch(e => console.log("Autoplay terblokir:", e));
  });
}