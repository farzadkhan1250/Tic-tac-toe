let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let turnO = true;
let counter = 0;
let title = document.querySelector("#title");
const audio = new Audio("click-button-menu-147349-[AudioTrimmer.com].mp3");

let newgamebtn = document.querySelector(".new-game");
let winmsg = document.querySelector(".winner")
const winpattern = [[0,1,2]
    ,[3,4,5]
    ,[6,7,8]
    ,[0,3,6]
    ,[1,4,7]
    ,[2,5,8]
    ,[0,4,8]
    ,[2,4,6]
];

const reset_game = () => {
        turnO = true;
        enable_box();
        winmsg.classList.add("hide");
        newgamebtn.classList.add("hide");
        title.innerText = "Tic Tac Toe"
}

boxes.forEach((box) => {

    box.addEventListener("click",() =>
    {
    audio.play()
    if(turnO){
        box.innerText = "O";
        turnO = false;
    }
    else
    {
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true
    counter++;
    let winnerplayer = checkwinner()
    if(counter=== 9 && !winnerplayer)
    {
        winmsg.innerText = `Game Draw`;
        winmsg.classList.remove("hide");
        newgamebtn.classList.remove("hide");
        title.innerText = ""
    }
   
    });
});

const disable_box = () => {
    for(let box of boxes){
        box.disabled = true
    }
}

const enable_box = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) =>{
    winmsg.innerText = `Congratulations winner is ${winner}`;
    winmsg.classList.remove("hide");
    newgamebtn.classList.remove("hide");
    title.innerText = "";
}

const checkwinner = () =>{
    for(let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val)
            {
                console.log("winner");
                disable_box();
                showwinner(pos1val);
            }
        }
    }
}

reset.addEventListener("click",reset_game);
newgamebtn.addEventListener("click",reset_game);

