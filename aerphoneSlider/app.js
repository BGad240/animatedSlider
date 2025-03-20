let next = document.getElementById('next')
let prev = document.getElementById('prev')
let back = document.getElementById('back')

let seeMore = document.querySelectorAll('.seeMore')
let carousel = document.querySelector('.carousel')
let listHTML = document.querySelector('.list')


next.onclick = function () {
    showSlider('next')
}


prev.onclick = function () {
    showSlider('prev')
}

let unAcceptedClk;


const showSlider = (type) => {
    next.style.pointerEvents = 'none'
    prev.style.pointerEvents = 'none'
    let items = document.querySelectorAll('.item')
    if (type === 'next') {
        carousel.classList.add('next');
        listHTML.appendChild(items[0])

    }
    if (type === 'prev') {
        listHTML.insertBefore(items[items.length - 1], items[0])
        carousel.classList.add('prev');

    }

    clearTimeout(unAcceptedClk)

    unAcceptedClk = setTimeout(() => {
        next.style.pointerEvents = 'auto'
        prev.style.pointerEvents = 'auto'
    }, 2000)
}



seeMore.forEach((button) => {
    button.onclick = function () {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
    console.log('Show Detail Clicked');
    console.log(carousel.classList);
});
back.onclick = function () {
    console.log(back)
    carousel.className = carousel.className.replace('showDetail', '').trim();
}