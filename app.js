document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");
    const hoverSign = document.querySelector(".hover-sign");

    videos.forEach(video => {
        video.muted = true; // Ensure autoplay works

        video.addEventListener("mouseenter", function () {
            video.currentTime = 0; // Reset video to the start when hovering
            video.play();
            hoverSign.classList.add("active"); // Hide hover sign
        });

        video.addEventListener("mouseleave", function () {
            video.pause();
            hoverSign.classList.remove("active"); // Show hover sign again
        });
    });
});
