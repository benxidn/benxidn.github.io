document.addEventListener("DOMContentLoaded", function() {
  // Menetapkan URL untuk "Dexter Modz" dan "Subscribe"
  document.getElementById('titleLink').href = 'https://benxidn.github.io';
  document.getElementById('subscribeLink').href = '/redirect/channel1.html';

  // Array untuk link YouTube dan halaman untuk unlock
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
  
  // Event listener untuk tombol subscribe
  subscribeButtons.forEach((button, index) => {
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
          goButton.href = goLink;
        }
      }, 3000);
    });
  });
  
  // Event listener untuk tombol unlock
  goButton.addEventListener('click', (e) => {
    if (currentProgress < totalProgress) {
      e.preventDefault();
    }
  });
  
  // Fungsi untuk update progress
  function updateProgress() {
    progressText.textContent = `Unlock progress: ${currentProgress}/${totalProgress}`;
    const percent = (currentProgress / totalProgress) * 100;
    progressBar.style.width = `${percent}%`;
  }
});
