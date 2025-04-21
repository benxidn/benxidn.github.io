// Saat HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  // Ganti URL di address bar jadi hanya domain (tanpa path/query/hash)
  window.history.replaceState({}, '', window.location.origin);
});
