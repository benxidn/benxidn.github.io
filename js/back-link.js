let clickedOnce = false;

document.getElementById('goBtn').addEventListener('click', function(e) {
    const url = this.href;

    if (!clickedOnce) {
        e.preventDefault(); // cegah link default
        clickedOnce = true;

        const win = window.open(url, '_blank');

        setTimeout(() => {
            if (win && !win.closed) {
                win.close();
            }
        }, 5000); // tutup tab baru setelah 2 detik
    }
    // klik kedua dan seterusnya: biarkan berjalan normal
});