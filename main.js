const firstNumber = document.getElementById('first_number')
const secondNumber = document.getElementById('second_number')

const multiplyBtn = document.getElementById('multiply_btn')
const divideBtn = document.getElementById('divide_btn')

const result = document.getElementById('result')



const multiply = () => firstNumber.value * secondNumber.value;

const divide = () => firstNumber.value / secondNumber.value;


let val = 0;

multiplyBtn.addEventListener('click', () => {
    val = multiply();
    //console.log(val);
    result.textContent = val;
});

divideBtn.addEventListener('click', () => {
    val = divide();
    //console.log(val);
    result.textContent = val;
});



//event listener


