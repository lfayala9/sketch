let colour = 'black'
let click = 'true'
let colourPicker = document.querySelector('#inputColour')

function sumBoard(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let amount = size * size;
    for(let i = 0; i< amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colourSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

sumBoard(16);

function changeSize(input){
    if(input >= 2 && input <= 100) {
        sumBoard(input);
    } else{
        alert("too many or too little squares")
    }
}

function userColorSelection(event) {
    colour = event.target.value;
}


colourPicker.addEventListener('change', userColorSelection, false);
colourPicker.addEventListener('input', userColorSelection, false);
    

function colourSquare(){
    if(click){
        if(colour === "pick"){
            this.style.backgroundColor = userColorSelection()
        }
        if(colour === "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else{
            this.style.backgroundColor = colour;
        } 
    }
}

function changeColour(choice){
    colour = choice;
}

function resetBoard(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white')
}

document.querySelector('body').addEventListener('click', (e) =>{
    if(e.target.tagName != 'BUTTON'){
        click = !click;
        if(click){
            document.querySelector('.mode').textContent = "Mode: Colouring"
        } else{
            document.querySelector('.mode').textContent = "Mode: NOT Colouring"
        }
    }
});