const slideshowContainer: HTMLElement = document.querySelector(
    ".slideshow-container"
)!;
const bgSlider1: HTMLElement = document.querySelector(".bg-slider-1")!;
const bgSlider2: HTMLElement = document.querySelector(".bg-slider-2")!;

setTimeout(() => {
    console.log(1);
    bgSlider1.classList.add("slider-1-animation-part1");
    bgSlider2.classList.add("slider-2-animation-part1");
}, 4500);

bgSlider1.addEventListener("animationend", (e) => {
    e.stopPropagation();
    const animation = e as AnimationEvent;
    const animationName = animation.animationName;
    console.log(animationName);

    if (animationName.includes("TESTING-slide-1_P1")) {
        setTimeout(() => {
            console.log("One-One");
            bgSlider1.classList.replace(
                "slider-1-animation-part1",
                "slider-1-animation-part2"
            );
        }, 4500);
    } else if (animationName.includes("TESTING-slide-1_P2")) {
        setTimeout(() => {
            console.log("One-Two");
            bgSlider1.classList.replace(
                "slider-1-animation-part2",
                "slider-1-animation-part1"
            );
        }, 4500);
    }
});

bgSlider2.addEventListener("animationend", (e) => {
    e.stopPropagation();
    const animation = e as AnimationEvent;
    const animationName = animation.animationName;
    console.log(animationName);

    if (animationName.includes("TESTING-slide-2_P1")) {
        setTimeout(() => {
            console.log("Two-One");
            bgSlider2.classList.replace(
                "slider-2-animation-part1",
                "slider-2-animation-part2"
            );
        }, 4500);
    } else if (animationName.includes("TESTING-slide-2_P2")) {
        setTimeout(() => {
            console.log("Two-Two");
            bgSlider2.classList.replace(
                "slider-2-animation-part2",
                "slider-2-animation-part1"
            );
        }, 4500);
    }
});