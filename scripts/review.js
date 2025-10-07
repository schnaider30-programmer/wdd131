document.addEventListener("DOMContentLoaded", () => {
    const countSpan = document.getElementById("review-count");
    if (countSpan) {
        let reviewCount = localStorage.getItem("reviewCount") || "0";
        reviewCount = parseInt(reviewCount, 10);
        countSpan.textContent = reviewCount;
    }
})