/// INITIALIZATION ///
const container = document.querySelector("#container");
let gridSize = 16;  
let bgColor='';
//let initialState = true;
for (r=0;r<gridSize;r++){
    populateRow();
}
hover();
/// EVENT LISTENERS ///


function hover(){
const hover = document.querySelectorAll('.square');
hover.forEach((square)=> {
    square.addEventListener('mouseenter',()=>{

            random_bg_color();
            square.style.backgroundColor = bgColor;
      square.style.backgroundColor = bgColor;
              
});
});
}

//const hover = document.querySelectorAll('.square'+i);
//hover.forEach((square)=> {
    //for (i=0;i<gridSize;i++){
    //randomColor= "#" + Math.floor(Math.random()*16777215).toString(16);
    //square[i].addEventListener('mouseenter',()=>{
   // square[i]= document.createElement('div');
    //square[i].classList.add("trail"+i);
    //square[i].style.backgroundColor = randomColor;
    //square.setAttribute('style', 'background-color: var(--color);');
    //document.documentElement.style.setProperty("--color", randomColor);
   // });

    
   // });

const newGridBtn = document.querySelector('button');
document.getElementById("newGrid").addEventListener('click', createNewGrid);


/// FUNCTIONS ///

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    bgColor = "rgb(" + x + "," + y + "," + z + ")";
}

function populateRow(){
     const newsquare = [];
        for (i = 0; i<gridSize; i++){
            newsquare[i]= document.createElement('div');
            container.appendChild(newsquare[i]);
            newsquare[i].classList.add('square');
            newsquare[i].setAttribute('style','border:1px solid;'); 
        }
}

function resetGrid(){
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
        console.log('grid reset');

    }

}

function createNewGrid(){
    resetGrid();
    gridSize = window.prompt("Pick Grid Size (between 1-100)", "");

    if (gridSize>100){
        alert("Grid size too big! Maximum size allowable is 100");
        createNewGrid();

    } else {
        document.documentElement.style.setProperty("--columns-row", gridSize);
        for (r=0;r<gridSize;r++){
            populateRow();
        }   
        hover();
    }
}
