(function () {
  let playerScore = 0;
  let computerScore = 0;
  let gameStatus = "On";

  let randomNumGenerator = () => {
    let randomNum = Math.floor(Math.random() * 3);
    return randomNum;
  };

  let computerPlay = () => {
    let gameKeyWords = ["rock", "paper", "scissors"];
    return gameKeyWords[randomNumGenerator()];
  };

  let stringSanitizer = str => {
    return str.trim().toLowerCase();
  };

  let roundWinnerChecker = (sanitizedPlayerSelection, computerSelection) => {
    if (sanitizedPlayerSelection === computerSelection) {
      return console.log("Draw!,try again.");
    }

    if (computerSelection === "rock") {
      switch (sanitizedPlayerSelection) {
        case "paper":
          playerScore++;
          return console.log(
            `You Win! ${sanitizedPlayerSelection} beats ${computerSelection}`
          );
          break;
        case "scissors":
          computerScore++;
          return console.log(
            `You Lose! ${computerSelection} beats ${sanitizedPlayerSelection}`
          );
          break;
      }
    } else if (computerSelection === "paper") {
      switch (sanitizedPlayerSelection) {
        case "scissors":
          playerScore++;
          return console.log(
            `You Win! ${sanitizedPlayerSelection} beats ${computerSelection}`
          );
          break;
        case "rock":
          computerScore++;
          return console.log(
            `You Lose! ${computerSelection} beats ${sanitizedPlayerSelection}`
          );
          break;
      }
    } else {
      switch (sanitizedPlayerSelection) {
        case "rock":
          playerScore++;
          return console.log(
            `You Win! ${sanitizedPlayerSelection} beats ${computerSelection}`
          );
          break;
        case "paper":
          computerScore++;
          return console.log(
            `You Lose! ${computerSelection} beats ${sanitizedPlayerSelection}`
          );
          break;
      }
    }
  };

  let playRound = () => {
    let playerSelection = prompt(
      "Please enter your selection, the accepted values are rock, paper and scissors",
      "Rock"
    );

    if (!playerSelection) {
      return alert(
        "The value can't be empty, Please enter your selection, the accepted values are rock," +
          " paper and scissors"
      );
    }

    let sanitizedPlayerSelection = stringSanitizer(playerSelection);

    if (
      !["rock", "paper", "scissors"].some(el => el === sanitizedPlayerSelection)
    ) {
      return alert(
        `${sanitizedPlayerSelection} is invalid value please provide a proper value ` +
          `,the accepted values are rock, paper and scissors`
      );
    }

    let computerSelection = computerPlay();

    roundWinnerChecker(sanitizedPlayerSelection, computerSelection);
  };

  let gameStatusChecker = () => {
    if (computerScore === playerScore) {
      let playAgain = prompt("Draw, if you wanna play again enter Yes");

      if (!playAgain) {
        gameStatus = "Done";
        return;
      }

      playAgain = stringSanitizer(playAgain);

      if (playAgain !== "yes") {
        gameStatus = "Done";
        return console.log("Draw");
      }
      gameStatus = "On";
      return;
    }
    gameStatus = "Done";
  };

  let game = () => {
    for (let i = 0; i < 5; i++) {
      playRound();
      console.log(
        `PlayerScore is ${playerScore}, computerScore is ${computerScore}`
      );
    }
    gameStatusChecker();
  };

  while (gameStatus === "On") {
    game();
  }

  if (computerScore > playerScore) {
    console.log(`You lost with score ${playerScore}:${computerScore}`);
  } else if (playerScore > computerScore) {
    console.log(`You won with score ${playerScore}:${computerScore}`);
  }
})();
