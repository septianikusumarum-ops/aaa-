// Ambil nama tamu dari URL
const urlParams = new URLSearchParams(window.location.search);
const guest = urlParams.get('to');

if (guest) {
  document.getElementById("guestName").textContent = guest;
}

// Elemen
const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const videoSection = document.getElementById("videoSection");
const video = document.getElementById("openingVideo");
const music = document.getElementById("bgMusic");

// Klik buka undangan
openBtn.addEventListener("click", () => {
  cover.style.display = "none";
  videoSection.style.display = "block";

  video.play();
  music.play();
});