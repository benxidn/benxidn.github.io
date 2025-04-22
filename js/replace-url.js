// Fungsi ini akan mengganti URL di address bar menjadi hanya domain tanpa path, query, atau hash
// Ketika halaman selesai dimuat, URL akan diubah menjadi hanya origin (domain) tanpa memuat ulang halaman.
document.addEventListener('DOMContentLoaded', () => {
  window.history.replaceState({}, '', window.location.origin);
});
