const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump= () => {
    mario.classList.add('jump');

    setTimeout(() => {
        
        mario.classList.remove('jump');
    
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetleft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace
    ('px', '' );    

    console.log (marioPosition);

    if (pipePosition < 120  && pipePosition > 0 &&  marioPosition < 80) {

        pipe.jogo.animation = 'none';
        pipe.jogo.left= '${pipePosition}px';

        mario.jogo.animation = 'none';
        mario.jogo.bottom= '${marioPosition}px';

        mario.src='/game-over.png';
        mario.jogo.width='75px'
        mario.jogo.marginleft = '50px'

        clearInterval(loop)
        
    }

}, 10);

document.addEventListener('keydown', jump);
