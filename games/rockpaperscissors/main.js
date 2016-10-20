var runGame = function() {
    var userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();

    if(userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        confirm("Error: Invalid Answer");
        runGame();
        return;
    }

    var computerChoice = Math.random();

    if(computerChoice <= 0.33) {
    	computerChoice = "rock";
    } else if(computerChoice <= 0.66) {
	computerChoice = "paper";
    } else {
	computerChoice = "scissors";
    }

    alert("Computer: " + computerChoice);
    
    alert(compare(userChoice, computerChoice));
    
    if(compare === "It's a tie!") {
        runGame();
    }
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "It's a tie!";
    } else if(choice1 === "rock") {
        if(choice2 === "scissors") {
            return "You Win!";
        } else {
            return "You Lose!";
        }
    } else if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "You Win!";
        } else {
            return "You Lose!";
        }
    } else if(choice1 === "scissors") {
        if(choice2 === "paper") {
            return "You Win!";
        } else {
            return "You Lose!";
        }
    } else {
    	return "Error: Invalid Answer";
    }
}
