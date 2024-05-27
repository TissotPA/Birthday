document.addEventListener("DOMContentLoaded", function() {
    var text1 = document.getElementById("text1");
    var redirectButton = document.getElementById("redirect-button");
    
    function showNewText(text) {
        text.style.opacity = "1";
        text.classList.add("fade-in");
    }
    
    function showButton(button) {
        button.style.opacity = "1";
        button.classList.add("fade-in");
    }

    text1.style.opacity = "0";
    text1.style.display = "block";
    redirectButton.style.opacity = "0";
    redirectButton.style.display = "block";

    setTimeout(function() {showNewText(text1)}, 2000);

    setTimeout(function() {showButton(redirectButton)}, 4000);


    redirectButton.addEventListener("click", function() {
        window.location.href = "q1.html";
    });
});
