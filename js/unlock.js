document.addEventListener("DOMContentLoaded", function () {

  // Ganti URL ke nama domain saat halaman dimuat
  window.onload = function () {
    const rootURL = window.location.origin + '/';
    history.pushState({}, '', rootURL);
  };

  // Menetapkan URL untuk "Dexter Modz" dan "Subscribe"
  const subscribeLink = document.getElementById('subscribeLink');
  if (subscribeLink) {
    subscribeLink.href = '/redirect/channel1.html';
  }

  // Array untuk link YouTube
  const youtubeLinks = [
    "/redirect/channel1.html",
    "/redirect/channel2.html",
    "/redirect/channel3.html",
    "/redirect/channel4.html"
  ];

  const subscribeButtons = [
    document.getElementById('btn1'),
    document.getElementById('btn2'),
    document.getElementById('btn3'),
    document.getElementById('btn4')
  ];

  const goButton = document.getElementById('goBtn');
  const progressText = document.getElementById('progressText');
  const progressBar = document.getElementById('progressBar');

  let currentProgress = 0;
  const totalProgress = subscribeButtons.filter(Boolean).length;

  // Event listener untuk tombol subscribe
  subscribeButtons.forEach((button, index) => {
    if (!button) return;
    button.addEventListener('click', (e) => {
      e.preventDefault();
      if (index !== currentProgress) return;

      // Buka link YouTube dalam tab baru
      window.open(youtubeLinks[index], '_blank');

      const iconRight = button.querySelector('.icon-right');
      iconRight.className = 'fas fa-spinner fa-spin icon-right';

      // Simulasikan waktu untuk proses
      setTimeout(() => {
        iconRight.className = 'fas fa-check-circle icon-right';
        button.classList.add('clicked');

        currentProgress++;
        updateProgress();

        if (currentProgress === totalProgress) {
          goButton.classList.add('active');
        }
      }, 3000);
    });
  });

  // Cegah klik jika progress belum lengkap
  if (goButton) {
    goButton.addEventListener('click', (e) => {
      if (currentProgress < totalProgress) {
        e.preventDefault();
      }
    });
  }

  // Fungsi untuk update progress
  function updateProgress() {
    if (progressText && progressBar) {
      progressText.textContent = `Unlock progress: ${currentProgress}/${totalProgress}`;
      const percent = (currentProgress / totalProgress) * 100;
      progressBar.style.width = `${percent}%`;
    }
  }

  // Anti klik tahan / klik kanan / drag
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  document.addEventListener('dragstart', function(e) {
    e.preventDefault();
  });

  document.addEventListener('mousedown', function(e) {
    if (e.which === 1) {
      e.preventDefault();
    }
  });
});
