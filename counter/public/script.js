const counterValueElement = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

incrementBtn.addEventListener('click', () => {
  fetch('/increment')
    .then(response => response.json())
    .then(data => {
      counterValueElement.textContent = data.counter;
    });
});

decrementBtn.addEventListener('click', () => {
  fetch('/decrement')
    .then(response => response.json())
    .then(data => {
      counterValueElement.textContent = data.counter;
    });
});

fetch('/counter')
  .then(response => response.json())
  .then(data => {
    counterValueElement.textContent = data.counter;
  });
