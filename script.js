let userScore = 0;
let compScore = 0;

function play(userChoice) {
    let item_list = ["rock", "paper", "scissor"];
    let compChoice = item_list[Math.floor(Math.random() * 3)];

    let winSound = document.getElementById("winSound");
    let loseSound = document.getElementById("loseSound");
    let tieSound = document.getElementById("tieSound");

    // reset sounds before playing
    winSound.pause(); winSound.currentTime = 0;
    loseSound.pause(); loseSound.currentTime = 0;
    tieSound.pause(); tieSound.currentTime = 0;

    let result = "";

    if (userChoice === compChoice) {
        result = "🤝 It's a Tie!";
        tieSound.play().catch(e => console.log("Tie sound error:", e));
    } 
    else if (
        (userChoice === "rock" && compChoice === "paper") ||
        (userChoice === "paper" && compChoice === "scissor") ||
        (userChoice === "scissor" && compChoice === "rock")
    ) {
        result = "Sorry You Lose!";
        compScore++;
        loseSound.play().catch(e => console.log("Lose sound error:", e));
    } 
    else {
        result = "🎉 You Win!";
        userScore++;
        winSound.play().catch(e => console.log("Win sound error:", e));
    }

    // display result
    document.getElementById("result").innerHTML =
        "You chose: " + userChoice +
        "<br>Computer chose: " + compChoice +
        "<br>" + result;

    // update score
    document.getElementById("score").innerHTML =
        "You: " + userScore + " | Computer: " + compScore;
}

// reset game
function resetGame() {
    userScore = 0;
    compScore = 0;

    document.getElementById("result").innerHTML = "";
    document.getElementById("score").innerHTML = "You: 0 | Computer: 0";
}