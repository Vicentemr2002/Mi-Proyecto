let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let cardBañosDom = document.querySelector('.card-baños');
let listItemDom = document.querySelector('.card-fotos .card-img-baños');
let thumbnailDom = document.querySelector('.card-baños .mini-fotos');

nextDom.onclick = function(){
    showSlider('next');
}

let timeRunning = 3000;
let runTimeOut;
function showSlider(type){
    let itemSlider = document.querySelector('card-baños .card-img-baños .card');
    let itemThumbnail = document.querySelector('.card-baños .mini-fotos .card');
   if(type === 'next'){
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    cardBañosDom.classList.add('next')
   }
   clearTimeout(runTimeOut);   
   runTimeOut = setTimeout(() =>{
    cardBañosDom.classList.remove('next')
   }, timeRunning)
}

