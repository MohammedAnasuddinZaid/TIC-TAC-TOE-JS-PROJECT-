let boxes = window.document.querySelectorAll(".box");
let reset = window.document.querySelector("#resert");
let newgamebuttion = window.document.querySelector("#newbtn")
let winnermessagecontainer = window.document.querySelector(".msgconatiner")
let winnermessage = window.document.querySelector("#msg")
let deawmessage = window.document.querySelector(".drawmsg")
let turnofo=true;
let count =0;

const winiingpatter = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];

const disablebloxe = () => {
    for(let box of boxes){
        box.disabled = true
    }
}
const enablebloxe = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}


for(let box of boxes){

    box.addEventListener("click",()=>{
        if(turnofo== true){
        box.innerText = "O"
        turnofo = false
    }else{
        box.innerText = "X"
        turnofo = true
    }
    box.disabled = true;
    count++

    let iswinner = checkwinner();
    if ( count == 9 && !iswinner){
        gamedraw();
    }
    })
}

const checkwinner = () => {
    for (let pattern of winiingpatter){
        let pattern1= boxes[pattern[0]].innerText
        let pattern2= boxes[pattern[1]].innerText
        let pattern3= boxes[pattern[2]].innerText
    if(pattern1 != "" && pattern2 != "" && pattern3 != "" ){
        if(pattern1==pattern2 && pattern2==pattern3){
            console.log("YOU ARE THE WINNER",pattern1)
            showwinner(pattern1);
            return true;
        }
    }
}
return false;
} 

const gamedraw = () => {
    winnermessage.innerText = "GAME WAS A DRAW!";
    winnermessagecontainer.classList.remove("hide");
    disablebloxe();

}

const showwinner = (winner) => {
    winnermessage.innerText = `YOU ARE THE WINNER ${winner}`;
    winnermessagecontainer.classList.remove("hide");
    disablebloxe()
}

const resetGame = () => {
    turnofo=true;
    count = 0;
    enablebloxe();
    winnermessagecontainer.classList.add("hide")
}




newgamebuttion.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame)
