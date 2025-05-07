document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // Load header
  fetch('/components/new-header.html')
    .then(res => res.text())
    .then(html => document.body.insertAdjacentHTML('afterbegin', html));

  const match = path.match(/unlock-(\d)(?:\.html)?$/);
  const totalButtons = match ? parseInt(match[1]) : 0;

  if (match) {
    const subscribeFile = `/components/btn-sub${match[1]}.html`;

    fetch(subscribeFile)
      .then(res => res.text())
      .then(html => {
        const container = document.getElementById('subscribeButtonsContainer');
        if (container) container.innerHTML = html;
        initUnlockLogic(totalButtons);
      });
  } else {
    const goBtn = document.getElementById('goBtn');

    if (goBtn) {
      goBtn.removeAttribute('href');
      goBtn.classList.remove('active');
      goBtn.style.cursor = 'default';
    }

    const progressText = document.getElementById('progressText');
    const progressBar = document.getElementById('progressBar');

    if (goBtn) goBtn.classList.add('active');
    if (progressText) progressText.textContent = `Unlock progress: 0/0`;
    if (progressBar) progressBar.style.width = `100%`;
  }

  function initUnlockLogic(totalButtons) {
    const goBtn = document.getElementById('goBtn');
    const progressText = document.getElementById('progressText');
    const progressBar = document.getElementById('progressBar');

    const subscribeButtons = [];
    for (let i = 1; i <= totalButtons; i++) {
      const btn = document.getElementById(`btn${i}`);
      if (btn) {
        subscribeButtons.push(btn);
        // Setup awal: hanya btn1 aktif
        btn.style.cursor = i === 1 ? 'pointer' : 'default';
        btn.style.pointerEvents = i === 1 ? 'auto' : 'none';
      }
    }

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

        const href = button.dataset.href;
        if (href) window.open(href, '_blank');
        const icon = button.querySelector('.icon-right');

        if (!button.classList.contains('counted')) {
          icon.className = 'fas fa-spinner fa-spin icon-right';

          setTimeout(() => {
            icon.className = 'fas fa-check-circle icon-right';
            button.classList.add('counted');
            button.style.backgroundColor = '#333';
            button.style.color = '#aaa';
            icon.style.color = '#aaa';
            button.style.cursor = 'default';
            button.style.pointerEvents = 'none';

            currentProgress++;
            updateProgress();

            // Aktifkan tombol berikutnya
            if (index + 1 < subscribeButtons.length) {
              const nextBtn = subscribeButtons[index + 1];
              nextBtn.style.cursor = 'pointer';
              nextBtn.style.pointerEvents = 'auto';
            }

            if (currentProgress === totalButtons && goBtn) {
              goBtn.classList.add('active');
              goBtn.setAttribute('href', goBtn.dataset.href);
              goBtn.style.cursor = 'pointer';
            }
          }, 3000);
        }
      });
    });

    if (goBtn) {
      goBtn.removeAttribute('href');
      goBtn.style.cursor = 'default';
      goBtn.addEventListener('click', (e) => {
        if (currentProgress < totalButtons) e.preventDefault();
      });
    }

    updateProgress();

    // Blok klik kanan, drag, klik kiri
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('dragstart', (e) => e.preventDefault());
    document.addEventListener('mousedown', (e) => {
      if (e.which === 1) e.preventDefault();
    });
  }
});
