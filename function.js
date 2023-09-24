const display = document.getElementById('display');
const button = document.getElementById('buttons');
const equels = document.getElementById('equels');
const one = document.getElementById('one');
const clear = document.getElementById('clear');



let currentDisplay = [];
let tempResult = [];

let arrayOne = [];
let arrayTwo = [];
let oporation = []


const calculate = () => {
    console.log(arrayOne);
    console.log(arrayTwo);
    console.log(oporation);

}




clear.addEventListener('click', (x) => {
    currentDisplay = [];
    display.innerHTML = "0";
});


equels.addEventListener('click', calculate);


button.addEventListener('click', (e) => {
    if(e.target.classList.contains('number')) {
       
        
        
        currentDisplay.push(e.target.innerHTML);
        display.innerHTML = currentDisplay.join("");
    }

    let sum = 0
    if(e.target.classList.contains('oporation')){
        if(arrayTwo === ""){
            arrayTwo.push(0);
            oporation.push(e.target.innerHTML);
            return calculate();
        } else {
            oporation.push(e.target.innerHTML);
            return calculate();
        }
        
       

        


    }
  }
  );

