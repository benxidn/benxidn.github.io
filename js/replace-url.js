// Mengganti URL di address bar menjadi '/' setelah halaman selesai dimuat, tanpa memuat ulang halaman
document.addEventListener('DOMContentLoaded', () => {
    window.history.replaceState(null, '', '/');
  });
  