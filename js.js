let game = prompt("Do you want to play the game?");

if (game === "yes") {
  let playerChoise = prompt("Please choose rock,paper or scissors to play");
  if (playerChoise) {
    let playerOne = playerChoise.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoise = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoise === 1
          ? "rock"
          : computerChoise === 2
          ? "paper"
          : "scissors";

      let result =
        playerOne === computer
          ? ` Player one: ${playerOne} \n computer: ${computer} \n Tie game`
          : playerOne === "rock" && computer === "paper"
          ? ` Player one: ${playerOne} \n computer: ${computer} \n computer wins`
          : playerOne === "paper" && computer === "scissors"
          ? ` Player one: ${playerOne} \n computer: ${computer} \n computer wins`
          : playerOne === "scissors" && computer === "rock"
          ? ` Player one: ${playerOne} \n computer: ${computer} \n computer wins`
          : ` Player one: ${playerOne} \n computer: ${computer} \n Player one wins`;
      console.log(result);
    } else {
      alert("Please choose between rock, paper, and scissors");
    }
  } else {
    alert("So you decided not to play");
  }
} else {
  alert("Ok, see you next time!");
}
