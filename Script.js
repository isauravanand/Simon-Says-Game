let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let  btns = ["yellow" ,"red", "purple", "green"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", ()=>{
    if(started == false){
        console.log("Game Started");
        started = true;
        levelUp();
    }
})



function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 150);
}

function levelUp() {
    userSeq = [];
    level++;
     h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor }`);

    gameSeq.push(randColor);
    btnflash(randBtn);
}

function checkAns(idx){

    if (userSeq[idx]===gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML =`Bad Luck Game Over :) <br>
        <b>Your Score Was ${level}<b><br>
        Press Any Key To Restart `;
        reset();  

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
    }
}


function btnPress(){
    let btn = this;
    btnflash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = 0;
    gameSeq = [];
    userSeq = [];
    level = 0;

} 