const Btn = document.getElementById('btn');
const showText = document.getElementById('text');

Btn.addEventListener('click', () => {
    setTimeout(() => {
        showText.textContent = 'ボタンをクリックしました';
    }, 2000);
});
