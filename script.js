
const body = document.body;

const button = document.createElement("button");
button.innerHTML = "HIT ME!";
button.classList.add("button");
body.appendChild(button);

const textInput = document.createElement("input");
textInput.id = "myTextInput";
textInput.type = "text";
//textInput.placeholder = "1-100";
textInput.value = "";
textInput.max = "100";
textInput.min = "1";
body.appendChild(textInput);

button.addEventListener("click",()=>{
    window.alert("Input a number (1-100) and the board with adjust how many blocks you have to sketch with.");
});

const enter = document.createElement("button");
enter.innerHTML = "ENTER";
enter.classList.add("enter");
body.appendChild(enter);

enter.addEventListener("click", ()=>{
    
    let inputField = document.getElementById("myTextInput");
    
    let inputValue = inputField.value;

    
        if(inputValue<=100 && inputValue >=1){ 
             container.innerHTML = '';
             window.alert("You entered, " + inputValue);
             createGrid(inputValue);
            
        


 };

 
   
});
  
let inputField = document.getElementById("myTextInput");
let inputValue = inputField.value;

const container = document.getElementById("container");

function createGrid(inputValue) {
  

let totalSquares = inputValue * inputValue; 
percentage = 100/inputValue;
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.style.width = `${percentage}%`;
      square.style.height = `${percentage}%`;
    square.classList.add("grid-square");
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "teal";
    });
    square.addEventListener("mouseleave", ()=> {
        square.style.backgroundColor = "pink";
    });
      container.appendChild(square);
  };
};
createGrid(12);






