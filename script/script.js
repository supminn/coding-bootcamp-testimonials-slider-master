const btnOnePrev = document.querySelector('#one-prev');
const btnTwoPrev = document.querySelector('#two-prev');
const btnOneNext = document.querySelector('#one-next');
const btnTwoNext = document.querySelector('#two-next');
const tanya = document.querySelector('#tanya');
const john = document.querySelector('#john');

const action = () => {
    tanya.classList.toggle('hidden');
    john.classList.toggle('hidden');
}

btnOneNext.addEventListener('click',action);
btnTwoNext.addEventListener('click',action);
btnOnePrev.addEventListener('click',action);
btnTwoPrev.addEventListener('click',action);