const btn = document.querySelector ('.js-button');
const select = document.querySelector ('.js-select');
const title2 = document.querySelector('.js-title2');
const player = document.querySelector('.js-player');
const computer = document.querySelector ('js-computer');
let resultComputer = '';
let resultPlayer = '';


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  
 
  function randomNumber(){
    const randomNumber = getRandomNumber(9); 
    
    if(randomNumber <=3 ){
         resultComputer = 'piedra';
        
      
    }
    else if (randomNumber >=7){
     
        resultComputer = 'papel';
    }

    else {
        resultComputer = 'tijera';

    }
}

function playerOption() {

    resultPlayer = select.value;


}

function play() {

    if   (resultPlayer === resultComputer) {

    
        title2.innerHTML = 'Empate'
    }

    else if  (resultPlayer === 'tijera' && resultComputer === 'papel') {
        title2.innerHTML = 'Has Ganado!'


    }
    else if (resultPlayer === 'piedra' && resultComputer === 'tijera') {

        title2.innerHTML = '¡Has Ganado!'
    }

    else if (resultPlayer === 'papel' && resultComputer === 'piedra') {

        title2.innerHTML = '¡Has Ganado!'
    }
    else  {

            title2.innerHTML = '¡Has perdido!'


        }
        console.log (resultComputer);
    } 




function handleClick() {

    randomNumber()
    playerOption()
    play()
    

};

  

btn.addEventListener ('click' , handleClick);
