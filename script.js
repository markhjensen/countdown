document.addEventListener('DOMContentLoaded', () => {
    const countdownBefore = document.querySelector('.countdown::before');
    
    countdownBefore.addEventListener('animationend', () => {
        countdownBefore.style.visibility = 'hidden';
    });

});

const countdownElement = document.querySelector('.countdown');
const countdownNumber = document.querySelector('.number');
const timerLength = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--timer-length'), 10);
const delay = 1000; // Adjust the delay in milliseconds (3 seconds in this example)
const now = new Date().getTime();
const startTime = now + (timerLength * 1000);
countdownNumber.textContent = timerLength;

function updateCountdown() {
    
    function update() {
        const currentTime = new Date().getTime();
        const timeRemaining = startTime - currentTime;
        const seconds = Math.ceil((timeRemaining % (1000 * timerLength)) / 1000);
        console.log(timeRemaining)
        if (timeRemaining > 1) {
            countdownNumber.textContent = seconds;
            
            setTimeout(update, 1000);
        } else {
            countdownElement.style.animation = 'none'; // Stop the animation on the main element
            countdownElement.classList.add('animation-paused'); // Add a class to pause animation
            countdownNumber.textContent = "GO";
            countdownNumber.style.animation = "number_pulse 1s 1";

        }
    }

    
    update();
}




// Introduce a delay before starting the countdown
setTimeout(() => {
    updateCountdown();
}, delay);

