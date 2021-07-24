document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('header').classList.toggle('hidden');
});

document.getElementById('order-form').addEventListener('submit', (event) => {
    alert('Order terkirim!');
    event.target.reset();
    event.preventDefault();
});
