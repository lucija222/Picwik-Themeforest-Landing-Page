// let counterElements = document.querySelectorAll(".counter");

// counterElements.forEach(element => {
//     const startValue = 0;
//     const endValue = parseInt(element.dataset.endValue);
//     const duration = 2500;
//     let startTime: number | null = null;

//     const numberCounterAnimation = (timestamp) => {
//         if (!startTime) {
//             startTime = timestamp;
//         }
//         const elapsedTime = timestamp - startTime;
//         const progress = Math.min(elapsedTime / duration, 1);
//         const value = Math.floor(progress * (endValue - startValue));
//         element.textContent = value.toString();
//         if (value < endValue) {
//             requestAnimationFrame(numberCounterAnimation);
//         }
//     };

//     const start = (timestamp) => {
//         startTime = timestamp;
//         requestAnimationFrame(numberCounterAnimation);
//     }
//     requestAnimationFrame(start);
// });
