// Menghapus Ekstensi .html dari URL di Address Bar
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  if (path.endsWith('/index.html')) {
    const newPath = path.replace('/index.html', '/');
    const newUrl = newPath + window.location.search + window.location.hash;
    window.history.replaceState(null, '', newUrl);

  } else if (path.endsWith('/index')) {
    const newPath = path.replace('/index', '/');
    const newUrl = newPath + window.location.search + window.location.hash;
    window.history.replaceState(null, '', newUrl);

  } else if (path.endsWith('.html')) {
    const newPath = path.replace(/\.html$/, '');
    const newUrl = newPath + window.location.search + window.location.hash;
    window.history.replaceState(null, '', newUrl);
  }
});

// Menyisipkan file HTML secara dinamis ke dalam elemen header dan footer
fetch('/components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

fetch('/components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

fetch('/components/tutor-download.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("download").innerHTML = data;
  });

fetch('/components/free.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("free").innerHTML = data;
  });

fetch('/components/key-allert.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("key-allert").innerHTML = data;
  })
  .catch(error => {
    console.error("Gagal memuat konten:", error);
  });

// Sisipkan tahun saat ini ke elemen dengan ID #tahun
document.addEventListener("DOMContentLoaded", () => {
  const tahunSekarang = new Date().getFullYear();
  const cekTahun = setInterval(() => {
    const el = document.getElementById("tahun");
    if (el) {
      el.textContent = tahunSekarang;
      clearInterval(cekTahun);
    }
  }, 100);
});

// Fungsi navigasi ke berbagai link
function Home() {
  window.open("/", "_self");
}

function Channel() {
  window.open("/redirect/channel1", "_self");
}

function Whatsapp() {
  window.open("https://chat.whatsapp.com/CrqhFjhKUEM7LMGqx8m8sU", "_self");
}

function AntiBan() {
  window.open("https://youtu.be/szocEpRmGTI", "_blank");
}

function Download() {
  window.open("https://youtu.be/Hl3Gu1IejBg", "_blank");
}

function InstallAPK() {
  window.open("https://youtu.be/gyDQEhZl4es", "_blank");
}

function AddScript() {
  window.open("https://youtu.be/6aqGQwdazVg", "_blank");
}

function Server5K() {
  window.open("https://youtu.be/EoyTJI0PyRU", "_blank");
}

function BeliAkun() {
  window.open("https://wa.me/6281338214136?text=Halo+min+saya+mau+beli+AKUN+ML+SERVER+5K+harga+5K+!!!", "_blank");
}

function Drone() {
  window.open("/redirect/channel1", "_self");
}

function Fakecez() {
  window.open("/redirect/channel1", "_self");
}

function Dexter() {
  window.open("/redirect/channel1", "_self");
}

// Fungsi untuk copy teks dari elemen dengan ID tertentu
function copy(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert(`${id === 'pass' ? 'Password' : 'Key Login'} dicopy!`);
  });
}
