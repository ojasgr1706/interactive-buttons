document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const resultText = document.getElementById("result-text");

    let noClickCount = 0;
    let baseSize = 25; // Base font size in px

    noBtn.addEventListener("click", () => {
        noClickCount++;

        // Decrease 'No' button size and increase 'Yes' button size
        let noSize = Math.max(baseSize - noClickCount * 2, 0); // Avoid negative size
        let yesSize = baseSize + noClickCount * 2;

        noBtn.style.fontSize = `${noSize}px`;
        yesBtn.style.fontSize = `${yesSize}px`;

        // Remove 'No' button after 10 clicks
        if (noClickCount >= 10) {
            noBtn.style.display = "none";
        }
    });

    yesBtn.addEventListener("click", () => {
        // Remove buttons and show text
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
        resultText.classList.remove("hidden");
    });
});
