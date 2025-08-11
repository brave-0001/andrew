document.addEventListener("DOMContentLoaded", function() {
    const portfolioGrid = document.getElementById("portfolio-grid");

    for (let i = 1; i <= 15; i++) {
        const img = document.createElement("img");
        img.src = `photo-${i}.jpg`;
        img.alt = `Project ${i}`;
        portfolioGrid.appendChild(img);
    }
});
