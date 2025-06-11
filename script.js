let count = 1;
let interval = null;
const counter = document.getElementById('counter');
const toggleBtn = document.getElementById('toggleBtn');

function updateDisplay() {
  counter.textContent = count;
}

function increment() {
  if (count < 999) {
    count++;
    updateDisplay();
  }
}

function decrement() {
  if (count > 1) {
    count--;
    updateDisplay();
  }
}

function toggleCounter() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    toggleBtn.textContent = '▶ Iniciar';
  } else {
    interval = setInterval(() => {
      if (count < 999) {
        increment();
      } else {
        toggleCounter(); // para automaticamente no 999
      }
    }, 100);
    toggleBtn.textContent = '⏸ Pausar';
  }
}

function resetCounter() {
  clearInterval(interval);
  interval = null;
  count = 1;
  updateDisplay();
  toggleBtn.textContent = '▶ Iniciar';
}

updateDisplay();
