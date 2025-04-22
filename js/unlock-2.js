document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
  
    // Ganti URL agar path tidak mengandung .html
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
        subscribeLink.href = '/redirect/channel1.html';  // Sesuaikan URL tujuan
      }
  
      const subscribeButton = document.getElementById('btn1');  // Hanya satu tombol subscribe
      const goButton = document.getElementById('goBtn');
      const progressText = document.getElementById('progressText');
      const progressBar = document.getElementById('progressBar');
  
      let currentProgress = 0;
      const totalProgress = 1;  // Hanya satu progress
  
      function updateProgress() {
        if (progressText && progressBar) {
          progressText.textContent = `Unlock progress: ${currentProgress}/${totalProgress}`;
          const percent = (currentProgress / totalProgress) * 100;
          progressBar.style.width = `${percent}%`;
        }
      }
  
      if (subscribeButton) {
        subscribeButton.addEventListener('click', (e) => {
          e.preventDefault();
  
          // Buka link YouTube
          window.open('/redirect/channel1.html', '_blank');
  
          const iconRight = subscribeButton.querySelector('.icon-right');
          if (!subscribeButton.classList.contains('counted')) {
            iconRight.className = 'fas fa-spinner fa-spin icon-right';
  
            setTimeout(() => {
              iconRight.className = 'fas fa-check-circle icon-right';
              subscribeButton.classList.add('counted');
              subscribeButton.style.backgroundColor = '#333';
              subscribeButton.style.color = '#aaa';
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
      }
  
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
  