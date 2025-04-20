// Menghapus ".html" dari URL di address bar (jika ada)
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
  
    // Hapus "/index.html" → "/"
    if (path.endsWith('/index.html')) {
      const newPath = path.replace('/index.html', '/');
      const newUrl = newPath + window.location.search + window.location.hash;
      window.history.replaceState(null, '', newUrl);
    }
  
    // Hapus "/index" → "/"
    else if (path.endsWith('/index')) {
      const newPath = path.replace('/index', '/');
      const newUrl = newPath + window.location.search + window.location.hash;
      window.history.replaceState(null, '', newUrl);
    }
  
    // Jika hanya ".html" di akhir (misal: about.html → about)
    else if (path.endsWith('.html')) {
      const newPath = path.replace(/\.html$/, '');
      const newUrl = newPath + window.location.search + window.location.hash;
      window.history.replaceState(null, '', newUrl);
    }
  });