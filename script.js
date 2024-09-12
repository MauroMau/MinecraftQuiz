document.getElementById("submit-btn").addEventListener("click", function() {
    const answers = {
        q1: "Feuerzeug",
        q2: "Creeper",
        q3: "Holzplanken"
    };
    
    let score = 0;
    let totalQuestions = 3;

    for (let key in answers) {
        const userAnswer = document.querySelector(`input[name="${key}"]:checked`);
        if (userAnswer && userAnswer.value === answers[key]) {
            score++;
        }
    }

    // Ergebnis anzeigen
    const result = document.getElementById("result");
    result.innerHTML = `Du hast ${score} von ${totalQuestions} richtig!`;
    result.style.display = "block";

    // Fortschrittsbalken aktualisieren
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = `${(score / totalQuestions) * 100}%`;
});
