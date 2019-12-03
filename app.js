let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convert(letter){
    if(letter === 'r') return "rock";
    else if(letter === 'p') return "paper";
    else return "scissors"
}

function win(user,comp){

    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convert(user)}${smallUserWord} beats  ${convert(comp)}${smallcompWord} you win!"`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow') ,300);
}
function lose(user,comp){
    compScore++;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convert(user)}${smallUserWord} loses  ${convert(comp)}${smallcompWord} you lost!"`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'),300);
} 
function draw(user,comp){
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convert(user)}${smallUserWord} draw  ${convert(comp)}${smallcompWord} It's a draw!"`;
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(() =>  document.getElementById(user).classList.remove('gray-glow') ,300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;

    }
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    });
    paper_div.addEventListener('click',function(){
        game("p");
    });
    scissors_div.addEventListener('click',function(){
        game("s");
    });
}

main();
