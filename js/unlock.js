// Menyimpan href dari link header
const headerLink = document.getElementById("headerLink");
const headerHref = headerLink.getAttribute("href");
console.log("Header Link Href: ", headerHref);

// Update header link (contoh penggunaan)
function updateHeaderLink(newHref) {
  headerLink.setAttribute("href", newHref);
  console.log("Header link has been updated to: ", newHref);
}

// Array untuk link YouTube
const youtubeLinks = [
  "https://www.youtube.com/@elfomodz2",
  "https://www.youtube.com/@hydramodz2",
  "https://www.youtube.com/@cybermodz2",
  "https://www.youtube.com/@newchannel4"
];
const goLink = "sub2.html"; // Link setelah semua tindakan selesai

// Tombol-tombol subscribe
const subscribeButtons = [
  document.getElementById('btn1'),
  document.getElementById('btn2'),
  document.getElementById('btn3'),
  document.getElementById('btn4')
];

// Tombol go (untuk membuka link setelah semua selesai)
const goButton = document.getElementById('goBtn');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');

let currentProgress = 0;
const totalProgress = subscribeButtons.length;

// Menambahkan event listener pada tombol subscribe
subscribeButtons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (index !== currentProgress) return; // Pastikan hanya tombol yang sesuai yang aktif

    window.open(youtubeLinks[index], '_blank'); // Membuka link YouTube baru

    const iconRight = button.querySelector('.icon-right');
    iconRight.className = 'fas fa-spinner fa-spin icon-right'; // Ganti ikon saat sedang memproses

    setTimeout(() => {
      iconRight.className = 'fas fa-check-circle icon-right'; // Ganti ikon jika selesai
      button.classList.add('clicked'); // Menandai tombol yang sudah diklik

      currentProgress++; // Increment progress
      updateProgress();

      // Jika sudah mencapai progres penuh, aktifkan tombol "Go"
      if (currentProgress === totalProgress) {
        goButton.classList.add('active');
        goButton.href = goLink; // Set href ke halaman tujuan
      }
    }, 3000); // Waktu simulasi setelah klik (3 detik)
  });
});

// Cegah klik tombol go jika progress belum tercapai
goButton.addEventListener('click', (e) => {
  if (currentProgress < totalProgress) {
    e.preventDefault(); // Jangan buka halaman jika progress belum penuh
  }
});

// Fungsi untuk memperbarui progress
function updateProgress() {
  progressText.textContent = `Unlock progress: ${currentProgress}/${totalProgress}`;
  const percent = (currentProgress / totalProgress) * 100;
  progressBar.style.width = `${percent}%`; // Update lebar progress bar
}
