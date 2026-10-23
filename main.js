const countEl = document.getElementById('count');
const incBtn = document.getElementById('inc');
const decBtn = document.getElementById('dec');

let count = 0;

function update() {
  countEl.textContent = count;
}

incBtn.addEventListener('click', () => {
  count++;
  update();
});

decBtn.addEventListener('click', () => {
  count--;
  update();
});

update();
