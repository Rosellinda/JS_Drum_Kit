//The difference between querySelector() and querySelectorAll() is that querySelector() returns a single object with the first HTML element that matches the 'selectors', but querySelectorAll() returns an array of objects with all the HTML elements that match the 'selectors'.



const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function from running all together
    
    key.classList.add('playing');
    //set time position to 0
    audio.currentTime = 0; // rewind to the start
    audio.play();
}

//The propertyName property returns the name of the CSS property associated with the transition, when a transitionevent occurs.
const removeTransition = (e) => {
    if(e.propertyName !== 'transform') return; //skip if its not transform
    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
// const keys = Array.from(document.querySelectorAll('.key'));

// The transitionend event is fired in both directions - as it finishes transitioning to the transitioned state, and when it fully reverts to the default or non-transitioned state.
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);