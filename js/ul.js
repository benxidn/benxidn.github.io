document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // Load header
  fetch('/components/new-header.html')
    .then(res => res.text())
    .then(html => document.body.insertAdjacentHTML('afterbegin', html));

  const match = path.match(/unlock-(\d)(?:\.html)?$/);
  const totalButtons = match ? parseInt(match[1]) : 0;

  if (match) {
    const subscribeFile = `/components/btn-subs${match[1]}.html`;

    fetch(subscribeFile)
      .then(res => res.text())
      .then(html => {
        const container = document.getElementById('subscribeButtonsContainer');
        if (container) container.innerHTML = html;
        initUnlockLogic(totalButtons);
      });
  } else {
    const goBtn = document.getElementById('goBtn');
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
      if (index !== 0) button.classList.add('inactive');

      button.addEventListener('click', e => {
        e.preventDefault();

        if (index > 0 && !subscribeButtons[index - 1].classList.contains('counted')) return;

        window.open(youtubeLinks[index], '_blank');

        const icon = button.querySelector('.icon-right');

        if (!button.classList.contains('counted')) {
          icon.className = 'fas fa-spinner fa-spin icon-right';

          setTimeout(() => {
            icon.className = 'fas fa-check-circle icon-right';
            button.classList.add('counted', 'inactive');

            currentProgress++;
            updateProgress();

            if (subscribeButtons[index + 1]) {
              subscribeButtons[index + 1].classList.remove('inactive');
            }

            if (currentProgress === totalButtons && goBtn) {
              goBtn.classList.add('active');
            }
          }, 3000);
        }
      });
    });

    if (goBtn) {
      goBtn.addEventListener('click', (e) => {
        if (!goBtn.classList.contains('active')) e.preventDefault();
      });
    }

    updateProgress();

    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('dragstart', (e) => e.preventDefault());
    document.addEventListener('mousedown', (e) => {
      if (e.which === 1) e.preventDefault();
    });
  }
});
