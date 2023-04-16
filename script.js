let counterElements = document.querySelectorAll(".counter");

counterElements.forEach(element => {
    const startValue = 0;
    const endValue = parseInt(element.dataset.endValue);
    const duration = 2500;
    let startTime = null;

    const numberCounterAnimation = (timestamp) => {
        if (!startTime) {
            startTime = timestamp;
        }
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const value = Math.floor(progress * (endValue - startValue));
        element.textContent = value.toString();
        if (value < endValue) {
            requestAnimationFrame(numberCounterAnimation);
        }
    };

    const start = (timestamp) => {
        startTime = timestamp;
        requestAnimationFrame(numberCounterAnimation);
    }
    requestAnimationFrame(start);
});




// counterElements.forEach((counterElements) => {
//     let startValue = 0;
//     const endValue = parseInt(counterElements.getAttribute("data-end-num"));
//     const duration = Math.abs(interval / endValue);
//     const counter = setInterval(() => {
//         if (endValue === 6500) {
//             startValue += 10;
//             counterElements.textContent = startValue;
//             if (startValue === endValue) {
//                 clearInterval(counter);
//             }
//         } else if (endValue === 200 || 100) {
//             startValue += 1;
//             counterElements.textContent = startValue;
//             if (startValue === endValue) {
//                 clearInterval(counter);
//             }
//         }
//     }, duration);
// });