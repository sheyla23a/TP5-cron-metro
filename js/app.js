let timer;
    let isRunning = false;
    let startTime = 0;

    const timerDisplay = document.querySelector('.timer-display');

    function updateTimer() {
        const currentTime = new Date().getTime();
        const deltaTime = currentTime - startTime;

        const hours = Math.floor(deltaTime / 3600000);
        const minutes = Math.floor((deltaTime % 3600000) / 60000);
        const seconds = Math.floor((deltaTime % 60000) / 1000);
        const milliseconds = deltaTime % 1000;

        timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
    }

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            startTime = new Date().getTime();
            timer = setInterval(updateTimer, 10);
        }
    }

    function pauseTimer() {
        if (isRunning) {
            isRunning = false;
            clearInterval(timer);
        }
    }

    function resetTimer() {
        isRunning = false;
        clearInterval(timer);
        timerDisplay.textContent = '00:00:00:000';
    }

    document.getElementById('start-timer').addEventListener('click', startTimer);
    document.getElementById('pause-timer').addEventListener('click', pauseTimer);
    document.getElementById('reset-timer').addEventListener('click', resetTimer);
