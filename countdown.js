// Countdown Timer Script
const countdownElement = document.getElementById('countdown');

// Set a fixed deadline date (e.g., 2 weeks from today or any specific date)
const deadline = new Date('2024-10-11T23:59:59Z'); // Replace with the actual deadline in ISO format

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = deadline - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    countdownElement.innerHTML = `TIME LEFT: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, display some message
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "TIME IS UP!";
    }
}

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);
