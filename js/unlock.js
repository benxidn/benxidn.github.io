document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // Load the header
  loadHeader();

  // Check if it's the 'unlock' page and load the subscribe button accordingly
  const isUnlockPage = path.includes('unlock-1');
  loadSubscribeButton(isUnlockPage);

  // Function to load the header content
  function loadHeader() {
    fetch('components/new-header.html')
      .then(res => res.text())
      .then(html => document.body.insertAdjacentHTML('afterbegin', html));
  }

  // Function to load the correct subscribe button based on the page type
  function loadSubscribeButton(isUnlockPage) {
    const subscribeFile = isUnlockPage
      ? 'components/btn-subscribe-single.html'
      : 'components/btn-subscribe.html';

    fetch(subscribeFile)
      .then(res => res.text())
      .then(html => {
        const container = document.getElementById('subscribeButtonsContainer');
        if (container) {
          container.innerHTML = html;
          initUnlockLogic(isUnlockPage ? 1 : 4);
        }
      });
  }

  // Function to initialize the unlock logic with button progress tracking
  function initUnlockLogic(totalButtons) {
    const goBtn = document.getElementById('goBtn');
    const progressText = document.getElementById('progressText');
    const progressBar = document.getElementById('progressBar');

    const subscribeButtons = getSubscribeButtons(totalButtons);
    const youtubeLinks = getYoutubeLinks();

    let currentProgress = 0;

    function updateProgress() {
      if (progressText && progressBar) {
        progressText.textContent = `Unlock progress: ${currentProgress}/${totalButtons}`;
        const percent = (currentProgress / totalButtons) * 100;
        progressBar.style.width = `${percent}%`;
      }
    }

    // Attach event listeners to each subscribe button
    subscribeButtons.forEach((button, index) => {
      button.addEventListener('click', e => handleButtonClick(e, index, button));
    });

    // Handle the click event for each button
    function handleButtonClick(e, index, button) {
      e.preventDefault();

      if (index > 0 && !subscribeButtons[index - 1].classList.contains('counted')) return;

      // Open the YouTube link in a new tab
      window.open(youtubeLinks[index], '_blank');

      const icon = button.querySelector('.icon-right');
      if (!button.classList.contains('counted')) {
        icon.className = 'fas fa-spinner fa-spin icon-right';

        // Simulate the completion of the button click
        setTimeout(() => {
          icon.className = 'fas fa-check-circle icon-right';
          button.classList.add('counted');
          button.style.backgroundColor = '#333';
          button.style.color = '#aaa';
          icon.style.color = '#aaa';

          currentProgress++;
          updateProgress();

          // Activate the 'go' button when all progress is completed
          if (currentProgress === totalButtons && goBtn) {
            goBtn.classList.add('active');
          }
        }, 3000);
      }
    }

    // Handle the click on the 'go' button
    if (goBtn) {
      goBtn.addEventListener('click', (e) => {
        if (currentProgress < totalButtons) {
          e.preventDefault();
        }
      });
    }

    updateProgress();

    // Disable right-click, drag, and mouse down events for additional protection
    disableInteractions();
  }

  // Helper function to get the subscribe buttons
  function getSubscribeButtons(totalButtons) {
    const buttons = [];
    for (let i = 1; i <= totalButtons; i++) {
      const btn = document.getElementById(`btn${i}`);
      if (btn) buttons.push(btn);
    }
    return buttons;
  }

  // Helper function to get the YouTube links based on the number of buttons
  function getYoutubeLinks() {
    return [
      "/redirect/channel1.html",
      "/redirect/channel2.html",
      "/redirect/channel3.html",
      "/redirect/channel4.html"
    ];
  }

  // Disable right-click, drag, and mousedown events
  function disableInteractions() {
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('dragstart', (e) => e.preventDefault());
    document.addEventListener('mousedown', (e) => {
      if (e.which === 1) e.preventDefault();
    });
  }
});
