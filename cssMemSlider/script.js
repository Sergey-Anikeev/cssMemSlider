let items = document.querySelectorAll('.corousel .item');
let currentItem = 0;
let isEnable = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnable = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationed', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnable = true;
    });
}