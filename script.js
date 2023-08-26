//Stone , Paper , Scissors
let playGame = confirm("Shall we play Stone,Paper,Scissors??");
if(playGame){
    let playerChoice = prompt("Please enter stone,paper or scissors");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne ==="stone" || playerOne === "paper" || playerOne ==="scissors"){
            let computerChoice = Math.floor(Math.random()*3 + 1);
            let computer = computerChoice===1 ? "stone" : computerChoice===2 ? "paper" : "scissors";
            let result = playerOne===computer ? `${playerOne} : ${computer} \nTie!` 
                : playerOne==="stone" && computer==="paper" ? `${playerOne} : ${computer} \nComputer wins!`
                : playerOne==="paper" && computer==="scissors" ? `${playerOne} : ${computer} \nPlayerOne wins!`
                : playerOne==="scissors" && computer==="stone" ? `${playerOne} : ${computer} \nComputer wins!`
                : `${playerOne} : ${computer} \nPlayerOne wins!`;
            alert(result);
            let playAgain = confirm("Do u want to play again??");
            playAgain ? location.reload() : alert("Thanks for playing...");
        }
        else{
            alert("Enter the valid choice...");
        }
    }
    else{
        alert("We'll play later...");
    }
}
else{
    alert("OK! Let's play later");
}