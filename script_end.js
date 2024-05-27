document.addEventListener("DOMContentLoaded", function() {
    var text1 = document.getElementById("text1");
    
    function showText(input) {
        input.style.opacity = "1";
        input.classList.add("fade-in");
    }

    text1.style.opacity = "0";
    text1.style.display = "block";

    setTimeout(function() {
        showText(text1);
    }, 2000);
});
