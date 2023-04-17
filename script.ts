// let counterElements: NodeListOf<HTMLElement> = document.querySelectorAll(".counter");

// counterElements.forEach((counter: HTMLElement): void => {
//     const startValue = 0;
//     const dataset: string = counter.dataset.endValue!;
//     const endValue = parseInt(dataset);
//     const duration = 2500;
//     let startTime: number | null = null;

//     const numberCounterAnimation = (timestamp: number): void => {
//         if (!startTime) {
//             startTime = timestamp;
//         } else if (startTime) {
//             const elapsedTime = timestamp - startTime;
//             const progress = Math.min(elapsedTime / duration, 1);
//             const value = Math.floor(progress * (endValue - startValue));
//             counter.textContent = value.toString();
//             if (value < endValue) {
//                 requestAnimationFrame(numberCounterAnimation);
//             }
//         }
//     };

//     const start = (timestamp: number): void => {
//         startTime = timestamp;
//         requestAnimationFrame(numberCounterAnimation);
//     }
    
//     requestAnimationFrame(start);
// });
