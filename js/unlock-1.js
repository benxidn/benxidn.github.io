document.addEventListener('DOMContentLoaded', () => {
      const goBtn = document.getElementById('goBtn');
      const progressText = document.getElementById('progressText');
      const progressBar = document.getElementById('progressBar');
      const button = document.getElementById('btn1');
      const youtubeLink = "/redirect/channel1.html";
      let currentProgress = 0;
      const totalButtons = 1;
      function updateProgress() {
        progressText.textContent = `Unlock progress: ${currentProgress}/${totalButtons}`;
        progressBar.style.width = `${(currentProgress / totalButtons) * 100}%`;
      }
      button.addEventListener('click', (e) => {
        e.preventDefault();
        if (button.classList.contains('counted')) return;
        window.open(youtubeLink, '_blank');
        const icon = button.querySelector('.icon-right');
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
      });
      goBtn.addEventListener('click', (e) => {
        if (currentProgress < totalButtons) {
          e.preventDefault();
        }
      });
      updateProgress();
      // Optional: Block right-click and drag
      document.addEventListener('contextmenu', (e) => e.preventDefault());
      document.addEventListener('dragstart', (e) => e.preventDefault());
      document.addEventListener('mousedown', (e) => {
        if (e.which === 1) e.preventDefault();
      });
    });
