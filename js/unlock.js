const youtubeLinks = [
    "/redirect/channel1.html",
    "/redirect/channel2.html",
    "/redirect/channel3.html",
    "/redirect/channel4.html"
  ];
  const goLink = "sub2.html";
  
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
  const totalProgress = subscribeButtons.length;
  
  subscribeButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      if (index !== currentProgress) return;
  
      window.open(youtubeLinks[index], '_blank');
  
      const iconRight = button.querySelector('.icon-right');
      iconRight.className = 'fas fa-spinner fa-spin icon-right';
  
      setTimeout(() => {
        iconRight.className = 'fas fa-check-circle icon-right';
        button.classList.add('clicked');
  
        currentProgress++;
        updateProgress();
  
        if (currentProgress === totalProgress) {
          goButton.classList.add('active');
          goButton.href = goLink;
        }
      }, 3000);
    });
  });
  
  goButton.addEventListener('click', (e) => {
    if (currentProgress < totalProgress) {
      e.preventDefault();
    }
  });
  
  function updateProgress() {
    progressText.textContent = `Unlock progress: ${currentProgress}/${totalProgress}`;
    const percent = (currentProgress / totalProgress) * 100;
    progressBar.style.width = `${percent}%`;
  }
  