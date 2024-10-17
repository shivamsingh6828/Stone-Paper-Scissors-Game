let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
};

const drawGame = () => {
    msg.innerText = "Game was a Draw. Play again!";
    msg.classList.add('draw');
    setTimeout(() => msg.classList.remove('draw'), 1000); // Remove animation after it ends
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        userScorePara.classList.add('pop'); // Add pop effect to score
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.classList.add('win');
        setTimeout(() => {
            msg.classList.remove('win');
            userScorePara.classList.remove('pop'); // Remove pop effect after animation
        }, 1000);
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        compScorePara.classList.add('pop');
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.classList.add('lose');
        setTimeout(() => {
            msg.classList.remove('lose');
            compScorePara.classList.remove('pop');
        }, 1000);
    }
};

const playGame = (userChoice) => {
    const compChoice = genComputerChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        // Add a temporary animation on click
        choice.classList.add('clicked');
        setTimeout(() => choice.classList.remove('clicked'), 300);
    });
});
