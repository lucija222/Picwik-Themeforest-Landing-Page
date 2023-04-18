let counterElements = document.querySelectorAll(".counter");
counterElements.forEach((counter) => {
    const startValue = 0;
    const dataset = counter.dataset.endValue;
    const endValue = parseInt(dataset);
    const duration = 2500;
    let startTime = null;
    const numberCounterAnimation = (timestamp) => {
        if (!startTime) {
            startTime = timestamp;
        }
        else if (startTime) {
            const elapsedTime = timestamp - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const value = Math.floor(progress * (endValue - startValue));
            counter.textContent = value.toString();
            if (value < endValue) {
                requestAnimationFrame(numberCounterAnimation);
            }
        }
    };
    const start = (timestamp) => {
        startTime = timestamp;
        requestAnimationFrame(numberCounterAnimation);
    };
    requestAnimationFrame(start);
});
