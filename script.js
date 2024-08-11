let userscore = 0
let compscore = 0

const choice = document.querySelectorAll(".choice")
const msg = document.querySelector("#massage")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const generateComputerChoice = () => {
    const select = ["rock" ,"paper" , "scissors"]
    const randidx= Math.floor(Math.random()*3)
    return select[randidx]

    
}
const drawgame = () =>{
    console.log("draw a game...")
      msg.innerHTML = "draw play agian."
      msg.style.backgroundColor = "#686464"
}
const showWinner = (userWin , userchoice , compchoice) =>{
   if(userWin) {
    userscore++;
    userScorePara.innerText = userscore
    
    msg.innerHTML = `You win your ${userchoice} beats ${compchoice}`
    msg.style.backgroundColor = "#8bbd3a"

   }else {
    compscore++;
    compScorePara.innerText = compscore
      msg.innerHTML = `you lose ${compchoice} beats your ${userchoice}`
      msg.style.backgroundColor ="#f85d5d"
   }

};


const playgame =(userchoice) => {
    console.log("userchoice =", userchoice)
    //generate computer choices
    const compchoice = generateComputerChoice();
    console.log("comp choice =", compchoice);

    if(userchoice === compchoice){
           //draw the game
         drawgame();
    } else {
        let userWin = true
        if(userchoice === "rock"){
            //sciisor,paper
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
          //rock, scissors
          userWin = compchoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compchoice === "rock" ? false : true;
        }

     showWinner(userWin , compchoice, userchoice)
       
    } 

};



choice.forEach((choice) => {
  
    choice.addEventListener("click",(e) => {
        const userchoice = choice.getAttribute("id")
      playgame(userchoice)
    })
})