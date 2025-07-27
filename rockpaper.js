let userscr = 0;
let compscr = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const userscore = document.getElementById("user-score");
const compscore = document.getElementById("comp-score")

const drawgame = ()=>{
    // console.log("game is draw");
    msg.innerText = "gamedraw paly again";
    msg.style.backgroundColor = "black";

    
}

const showwinner =(userwin,userchoice,compchoice)=>{
    if(userwin){
        // console.log("you win ");
        userscr++;
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscore.innerText = userscr;

    }
    else{
        // console.log("you loose");
        compscr++;
        msg.innerText = `you loose ${compchoice} beats your ${userchoice}`;
         msg.style.backgroundColor = "red";
        compscore.innerText = compscr;



    }
}

const genratecompchoice=()=>{
    let options = ["rock","paper","scissor"];
    let randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
}

const playgame =(userchoice)=>{
    // console.log("choice by user ",userchoice);
    //generate computer choice
    const compchoice = genratecompchoice();
    // console.log("choice by computer ",compchoice);
    if(userchoice === compchoice){
        drawgame();
    }
    else{
        userwin = true;
        if(userchoice === "rock"){
         userwin  = compchoice === "paper" ? false :true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true ;
        }
        else
        userwin = compchoice === "rock" ? false : true;
      showwinner(userwin,userchoice,compchoice);
        }
    }
   


choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    })
});