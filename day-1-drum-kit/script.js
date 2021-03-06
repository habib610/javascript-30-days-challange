function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
    button.classList.add('playing');
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.btn');
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener('keydown', playSound);