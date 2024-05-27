document.addEventListener("DOMContentLoaded", function() {
    var userInput = document.getElementById("user-input");
    var redirectButton = document.getElementById("redirect-button");

    var correctAnswer = "ombre";
    
    function showElement(input) {
        input.style.opacity = "1";
        input.classList.add("fade-in");
    }

    userInput.style.opacity = "0";
    userInput.style.display = "block";
    redirectButton.style.opacity = "0";
    redirectButton.style.display = "block";

    setTimeout(function() {
        showElement(userInput);
    }, 2000);

    setTimeout(function() {
        showElement(redirectButton);
    }, 4000);

    redirectButton.addEventListener("click", function() {
        var userAnswer = userInput.value.trim();

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            redirectButton.classList.add("correct");
            redirectButton.textContent = "FÉLICITATIONS";

            setTimeout(function() {
                window.location.href = "q2.html"; // Remplace par la page suivante
            }, 3000);
        } else {
            redirectButton.classList.add("wrong");
            redirectButton.textContent = "MAUVAISE RÉPONSE";

            setTimeout(function() {
                redirectButton.classList.remove("wrong");
                redirectButton.textContent = "VALIDER";
                userInput.value = "";
            }, 3000);
        }
    });
});
