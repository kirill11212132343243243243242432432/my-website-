document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("yes-btn");
    const noButton = document.getElementById("no-btn");
    const loveMessage = document.getElementById("love-message");

    // Когда нажимаешь "Sì"
    yesButton.addEventListener("click", function() {
        loveMessage.style.display = "block";
    });

    // Логика убегающей кнопки "No"
    noButton.addEventListener("mouseover", function() {
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 150);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});
