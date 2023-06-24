const btnIncrement = document.getElementById('btn-icrement')
const btnDecrement = document.getElementById('btn-decrement')
const incrementInput = document.querySelector('.increment__input')

const toBePaid = document.getElementById('to-be-paid');
const received = document.getElementById('received');
const change = document.getElementById('change');

btnIncrement.addEventListener('click', () => {
   incrementInput.value++;
   toBePaid.textContent = parseInt(toBePaid.textContent) + 130;
   received.textContent = parseInt(received.textContent) + 160;
   change.textContent = parseInt(change.textContent) + 30;
});

btnDecrement.addEventListener('click', () => {
   incrementInput.value--;
   toBePaid.textContent = parseInt(toBePaid.textContent) - 130;
   received.textContent = parseInt(received.textContent) - 160;
   change.textContent = parseInt(change.textContent) - 30;
});
