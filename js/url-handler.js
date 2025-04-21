// Ganti URL ke nama domain saat halaman dimuat
window.onload = function() {
    const rootURL = window.location.origin + '/';
    history.pushState({}, '', rootURL);
};
