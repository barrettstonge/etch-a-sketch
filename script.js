
const body = document.body;

const button = document.createElement("button");
button.innerHTML = "HIT ME!";
button.classList.add("button");
body.appendChild(button);

const textInput = document.createElement("input");
textInput.id = "myTextInput";
textInput.type = "text";
textInput.placeholder = "1-100";
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
            
        


 }
 else {window.alert("That number is outside of the stated paramters, please inout a number between 1 and 100.");}

 
   
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
      function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
    square.classList.add("grid-square");
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });
    square.addEventListener("mouseleave", ()=> {
        square.style.backgroundColor = getRandomColor();
    });
      container.appendChild(square);
  };
};
createGrid(16);





