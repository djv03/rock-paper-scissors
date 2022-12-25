//stone paper scissors game

// Function to generate random number 

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// document.write("Random Number between 1 and 3: ")

// Function call
let rock,paper,scissor;
let computer = randomNumber(1, 4);
document.write(randomNumber(1, 4));
if (computer==1) {
    computer="rock";
}
else if(computer==2){
     computer="paper";

} 
else {
    computer="scissor"
}
function win() {
    console.log("you won!!");
    // document.write("win!!")
}
function lose() {
    console.log("you lose.");
    // document.write("lose");
}


var user = document.getElementsByClassName(".input").value;
// console.log(user)

document.querySelector(".btn").addEventListener("click",()=>{
    console.log("clicked")

    if (user === computer) {
        console.log("tie");
        // document.write("tie");
    } 
    else if (user == "rock" && computer == "scissor" || user == "paper" && computer == "rock" || user == "scissor" && computer == "paper"  )
     {
        win()
    }
    else {
        lose()
    }
    console.log("computer has chosen: "+computer);
    console.log("you chosen: " +user);
    
    
})
