const down = document.getElementById('down');
const up = document.getElementById('up');
down.addEventListener('click', () => {
  down.style.display = 'none';
  up.style.display = 'block';
});
up.addEventListener('click', () => {
  up.style.display = 'none';
  down.style.display = 'block';
});/**/
