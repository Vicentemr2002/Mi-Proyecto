let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');


let cardBañosDom = document.querySelector('.card-baños');
let listItemDom = document.querySelector('.card-baños .card-img-baños');
let thumbnailDom = document.querySelector('.card-baños .mini-fotos');


nextDom.onclick = function () {
    showSlider('next');
}
prevDom.onclick = function () {
    showSlider('prev');
}


let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.card-img-baños .card');
    let itemThumbnail = document.querySelectorAll('.card-baños .mini-fotos .card');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        cardBañosDom.classList.add('next')
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem])
        thumbnailDom.prepend(itemThumbnail[positionLastItem])
        cardBañosDom.classList.add('prev')
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        cardBañosDom.classList.remove('next')
        cardBañosDom.classList.remove('prev')
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext)
}

