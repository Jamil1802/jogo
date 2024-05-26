const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const run = () => {
    mario.classList.add('run');

    setTimeout(() => {
        mario.classList.remove('run');
    }, 500);
    mario.src = " mario.style.width = '75px'"
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    //console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 105) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        cloud.style.animation = 'none';

        mario.src = 'game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 38) {
        jump();
    }
});