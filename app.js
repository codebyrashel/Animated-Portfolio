document.addEventListener("DOMContentLoaded", function () {
    const projectSection = document.querySelector(".my-projects"); // Target the specific section
    const videos = projectSection.querySelectorAll("video"); // Only select videos within this section
    
    videos.forEach(video => {
        const hoverSign = video.closest(".project-vidbox").querySelector(".hover-sign");
        video.muted = true; // Ensure autoplay works

        video.addEventListener("mouseenter", function () {
            if (hoverSign) hoverSign.style.display = "none"; // Hide hover sign properly
            video.play(); // Play video without resetting
        });

        video.addEventListener("mouseleave", function () {
            video.pause(); // Pause without resetting
            if (hoverSign) hoverSign.style.display = "block"; // Show hover sign again
        });

        video.addEventListener("ended", function () {
            video.currentTime = 0; // Restart video when it ends
            video.play(); // Play again
        });
    });
});