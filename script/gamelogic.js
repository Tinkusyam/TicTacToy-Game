let music = new Audio('./assets/music.mp3');
let audiotune = new Audio('./assets/ting.mp3');
let gameover = new Audio('./assets/gameover.mp3');
let turn="X";
let isgameover = false;



// function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}




// function to cheack the win
const cheackWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText
            ===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){

                e.forEach(index=>{
                    document.getElementsByClassName('box')[index].style.backgroundColor=
                    "gray";
                })
                document.querySelector('.info').innerText=boxtext[e[0]].innerText +"Won";
                isgameover=true;
                document.querySelector(".imgbox").getElementsByTagName('img')[0].style
                .width="200px";
        }
    })

}

const checkForDraw = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    if (Array.from(boxtext).every(element => element.innerText !== "")) {
        document.querySelector('.info').innerText = "It's a draw! Please play again.";
        isgameover = true;
    }
};




// game logic
music.play();
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===""){
            boxtext.innerText = turn;
            turn = changeTurn();
            audiotune.play();
            cheackWin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText="turn for:"+turn;
                checkForDraw(); 
            }

        }


    })

})


// reset button logic

      document.getElementById('reset').addEventListener('click',()=>{
          let boxtexts= document.querySelectorAll('.boxtext');

          Array.from(boxtexts).forEach(element=>{
              element.innerText=""
          });

          let boxes=document.querySelectorAll('.box');
          for(let i=0;i<boxes.length;i++){
            boxes[i].style.backgroundColor="";
          }
          turn="X";
          isgameover=false;
          document.getElementsByClassName('info').innerText="Turn for"+turn;
          document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
      });



      
    