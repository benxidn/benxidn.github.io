document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // Bersihkan URL dari index.html atau .html
  if (path.endsWith('/index.html') || path.endsWith('/index')) {
    const newPath = path.replace(/\/index(\.html)?$/, '/');
    const newUrl = newPath + window.location.search + window.location.hash;
    window.history.replaceState(null, '', newUrl);
  } else if (path.endsWith('.html')) {
    const newPath = path.replace(/\.html$/, '');
    const newUrl = newPath + window.location.search + window.location.hash;
    window.history.replaceState(null, '', newUrl);
  }

  // Load header
  fetch('/components/new-header.html')
    .then(res => res.text())
    .then(html => document.body.insertAdjacentHTML('afterbegin', html));

  // Deteksi halaman unlock baru (dengan 1 tombol)
  const isUnlockPage = path.includes('unlock-1');

  // Load tombol subscribe sesuai halaman
  const subscribeFile = isUnlockPage
    ? '/components/btn-subscribe-single.html'
    : '/components/btn-subscribe.html';

  fetch(subscribeFile)
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById('subscribeButtonsContainer');
      if (container) {
        container.innerHTML = html;
        initUnlockLogic(isUnlockPage ? 1 : 4);
      }
    });

  function initUnlockLogic(totalButtons) {
    const goBtn = document.getElementById('goBtn');
    const progressText = document.getElementById('progressText');
    const progressBar = document.getElementById('progressBar');

    const subscribeButtons = [];
    for (let i = 1; i <= totalButtons; i++) {
      const btn = document.getElementById(`btn${i}`);
      if (btn) subscribeButtons.push(btn);
    }

    const youtubeLinks = [
      "/redirect/channel1.html",
      "/redirect/channel2.html",
      "/redirect/channel3.html",
      "/redirect/channel4.html"
    ];

    let currentProgress = 0;

    function updateProgress() {
      if (progressText && progressBar) {
        progressText.textContent = `Unlock progress: ${currentProgress}/${totalButtons}`;
        const percent = (currentProgress / totalButtons) * 100;
        progressBar.style.width = `${percent}%`;
      }
    }

    subscribeButtons.forEach((button, index) => {
      button.addEventListener('click', e => {
        e.preventDefault();

        if (index > 0 && !subscribeButtons[index - 1].classList.contains('counted')) return;

        window.open(youtubeLinks[index], '_blank');
        const icon = button.querySelector('.icon-right');

        if (!button.classList.contains('counted')) {
          icon.className = 'fas fa-spinner fa-spin icon-right';

          setTimeout(() => {
            icon.className = 'fas fa-check-circle icon-right';
            button.classList.add('counted');
            button.style.backgroundColor = '#333';
            button.style.color = '#aaa';
            icon.style.color = '#aaa';

            currentProgress++;
            updateProgress();

            if (currentProgress === totalButtons && goBtn) {
              goBtn.classList.add('active');
            }
          }, 3000);
        }
      });
    });

    if (goBtn) {
      goBtn.addEventListener('click', (e) => {
        if (currentProgress < totalButtons) {
          e.preventDefault();
        }
      });
    }

    updateProgress();

    // Blok klik kanan dan drag
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('dragstart', (e) => e.preventDefault());
    document.addEventListener('mousedown', (e) => {
      if (e.which === 1) e.preventDefault();
    });
  }
});
