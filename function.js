const display = document.getElementById('display');
const button = document.getElementById('buttons');
const equels = document.getElementById('equels');
const one = document.getElementById('one');
const clear = document.getElementById('clear');



let tempValue = "0";
let tempValueTwo = one;
let calculated = "";


const calculate = () => {
    

}

const calculateAdd = () => {

   

}


clear.addEventListener('click', (x) => {
    currentDisplay = [];
    display.innerHTML = "0";
    tempValue = '0';
});


equels.addEventListener('click', calculate);


button.addEventListener('click', (e) => {
    if(e.target.classList.contains('number')) {
        
        const keyContent = e.target.textContent;
        
        
        if(display.textContent === '0' || tempValueTwo.classList.contains('oporation')){
            display.textContent = keyContent;
            
        } else {
            
            display.textContent = display.textContent + keyContent;
            tempValue = keyContent;

            
            
        }
       
    }

    
    if(e.target.classList.contains('oporation')){

        
        if(e.target.textContent === "+"){
            
            tempValueTwo = e.target;
            
            calculated = Number(tempValue) + Number(display.textContent);
            
            display.textContent = calculated;

            
            console.log(tempValue);
            console.log(calculated);
            console.log(display.textContent);




        } else {
            console.log('frog');
        }
        
    
    }
  }
  );

