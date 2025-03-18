document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");
    const changeButton = document.getElementById("changeStyle");
    const resetButton = document.getElementById("resetStyle");

    changeButton.addEventListener("click", function () {
        textElement.style.color = "green";
        textElement.style.fontSize = "24px";
    });

    resetButton.addEventListener("click", function () {
        textElement.style.color = "black";
        textElement.style.fontSize = "16px";
    });
});
