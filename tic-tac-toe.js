
let bgmusic = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("yay-sound-effect.mp3");
let turn = 'X';
let isgameover = false;

const changeturn = () => {
    return turn === 'X' ? 'O' : 'X' ;
}

const checkwin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText !== "")){
           let a = document.querySelector('.info').innerText = "'' " + boxtexts[e[0]].innerText + " won" + " ''" ;
            gameover.play();
            isgameover = true;
        }
    })
}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click' , () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeturn();
            ting.play();
            checkwin();
            if(!isgameover)
            {
                document.getElementsByClassName('info')[0].innerText = "Turn For " + turn + "'s";
            }               
        }
    })
})

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    ting.play();
    turn = "X";
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn For " + turn + "'s";
})