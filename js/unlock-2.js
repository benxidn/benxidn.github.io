document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  if (path.endsWith('.html')) {
    const newPath = path.replace(/\.html$/, '');
    const newUrl = newPath + window.location.search + window.location.hash;
    window.history.replaceState(null, '', newUrl);
  }

  fetch('/components/unlock-section-2.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('unlockContainer').innerHTML = data;
      initUnlockLogic();
    });

  function initUnlockLogic() {
    const subscribeLink = document.getElementById('subscribeLink');
    if (subscribeLink) {
      subscribeLink.href = '/redirect/channel1.html';
    }

    const subscribeButtons = [
      document.getElementById('btn1')
    ];

    const youtubeLinks = [
      '/redirect/channel1.html'
    ];

    const goButton = document.getElementById('goBtn');
    const progressText = document.getElementById('progressText');
    const progressBar = document.getElementById('progressBar');

    let currentProgress = 0;
    const totalProgress = subscribeButtons.filter(Boolean).length;

    function updateProgress() {
      if (progressText && progressBar) {
        progressText.textContent = `Unlock progress: ${currentProgress}/${totalProgress}`;
        const percent = (currentProgress / totalProgress) * 100;
        progressBar.style.width = `${percent}%`;
      }
    }

    subscribeButtons.forEach((button, index) => {
      if (!button) return;

      button.addEventListener('click', (e) => {
        e.preventDefault();

        // Buka link YouTube
        window.open(youtubeLinks[index], '_blank');

        const iconRight = button.querySelector('.icon-right');

        if (!button.classList.contains('counted')) {
          iconRight.className = 'fas fa-spinner fa-spin icon-right';

          setTimeout(() => {
            iconRight.className = 'fas fa-check-circle icon-right';
            button.classList.add('counted');
            button.style.backgroundColor = '#333';
            button.style.color = '#aaa';
            iconRight.style.color = '#aaa';

            currentProgress++;
            updateProgress();

            if (currentProgress === totalProgress) {
              goButton.classList.add('active');
            }
          }, 3000);
        } else {
          iconRight.className = 'fas fa-check-circle icon-right';
        }
      });
    });

    if (goButton) {
      goButton.addEventListener('click', (e) => {
        if (currentProgress < totalProgress) {
          e.preventDefault();
        }
      });
    }

    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('dragstart', (e) => e.preventDefault());
    document.addEventListener('mousedown', (e) => {
      if (e.which === 1) e.preventDefault();
    });
  }
});
