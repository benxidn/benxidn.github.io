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

fetch('/components/key-kx.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("kx").innerHTML = data;
  });

fetch('/components/key-hontoni.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("hontoni").innerHTML = data;
  });

fetch('/components/key-jhong.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("jhong").innerHTML = data;
  });

fetch('/components/key-ui.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("ui").innerHTML = data;
  });

fetch('/components/key-kxui.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("kxui").innerHTML = data;
  });

fetch('/components/extra.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("extra").innerHTML = data;
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

function BeliAkun() {
  window.open("https://wa.me/6281338214136?text=Halo+min+saya+mau+beli+AKUN+ML+SERVER+5K+harga+5K+!!!", "_blank");
}

// Link Youtube Tutorial
function InstallAPK() {
  //window.open("https://youtu.be/2BjSJtgBR6Q", "_blank");
  window.open("https://youtu.be/6OGsYt9cKfw", "_blank"); // External
}

function AntiBan() {
  //window.open("https://youtu.be/HHwRMx2mNg8", "_blank");
  window.open("https://youtu.be/IZYrSzOLzW4", "_blank"); // External
}

function Server5K() {
  //window.open("https://youtu.be/JcFwilWGkj0", "_blank");
  window.open("https://youtu.be/U38odYief5k", "_blank"); // External
}

function Download() {
  //window.open("https://youtu.be/LxdyvnWkJlA", "_blank");
  window.open("https://youtu.be/iBg7JTYlb6Y", "_blank"); // External
}

function AddScript() {
  //window.open("https://youtu.be/b1QywYLVTrQ", "_blank");
  window.open("https://youtu.be/CFvos81CLrE", "_blank"); // External
}

function Minipatch() {
  window.open("https://youtu.be/YvMaHJgEzVk", "_blank"); // XXXXX
}

function RoomWangi() { // Same
  //window.open("https://youtu.be/VM1ZRO91DdU", "_blank");
  window.open("https://youtu.be/axtT3kVyo68", "_blank"); // External
}

function VPN() { // Same
  //window.open("https://youtu.be/VM1ZRO91DdU", "_blank");
  window.open("https://youtu.be/axtT3kVyo68", "_blank"); // External
}

function Injector() {
  window.open("https://youtu.be/an21Fhn9OMQ", "_blank"); // External
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
    const message = id === 'pass'
      ? 'Password berhasil dicopy!'
      : 'Key Login berhasil dicopy!\nJika key expired silakan klik get key di aplikasi langsung!';
    alert(message);
  });
}

// Fungsi untuk popup beli link
function payLink(button) {
  const link = button.getAttribute('data-href');
  const confirmed = confirm("Untuk mendapatkan link download tanpa iklan ini kamu harus bayar Rp. 3000!\nKlik 'OK' untuk bayar, atau 'Cancel' untuk batal!");
  if (confirmed) {
    window.open(link, "_blank");
  }
  return false;
}

// Fungsi untuk popup beli link
function payDrone(button) {
  const link = button.getAttribute('data-href');
  const confirmed = confirm("Untuk mendapatkan link drone view tanpa iklan ini kamu harus bayar Rp. 5000!\nKlik 'OK' untuk bayar, atau 'Cancel' untuk batal!");
  if (confirmed) {
    window.open(link, "_blank");
  }
  return false;
}

// Fungsi untuk popup beli akun server 5k
function payAkun(button) {
  const link = button.getAttribute('data-href');
  const confirmed = confirm("Untuk beli akun ML server 5K ini kamu harus bayar Rp. 5000!\nKlik 'OK' untuk bayar, atau 'Cancel' untuk batal!");
  if (confirmed) {
    window.open(link, "_blank");
  }
  return false;
}




