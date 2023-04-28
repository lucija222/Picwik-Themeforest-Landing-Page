export const imgIcons = document.querySelectorAll(".anchor img");

export const galleryCallback = (imgElement) => {
    imgElement.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        const target = e.target;
        if (target.src.includes("images/gallery_slider/img-icon-white.png")) {
            target.src = "images/gallery_slider/img-icon-pink.png";
        } else if (
            target.src.includes("images/gallery_slider/play-icon-white.png")
        ) {
            target.src = "images/gallery_slider/play-icon-pink.png";
        }
    });
    imgElement.addEventListener("mouseleave", (e) => {
        e.stopPropagation();
        const target = e.target;
        if (target.src.includes("images/gallery_slider/img-icon-pink.png")) {
            target.src = "images/gallery_slider/img-icon-white.png";
        } else if (
            target.src.includes("images/gallery_slider/play-icon-pink.png")
        ) {
            target.src = "images/gallery_slider/play-icon-white.png";
        }
    });
};
