//What user inputs into that input box, you save it to a variable
let result = document.getElementById('inputText');

let calculate=(number)=>{
    //value is zero to start
    result.value+=number;
}

//Works with all common calculations

/*

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert('Enter a valid input')
    }
}

*/

function clr(){
    result.value= '0';
}

function del(){
    //0 is start and -1 is end. Eg: 789, 9 is the end.
    result.value=result.value.slice(0,-1)
}


//Adding
const add = function(number) {
    result.value+=number;
   };
   
//Subtracting
const subtract = function(val1,val2) {
    console.log(val1-val2)
   };
   
   
//Multiplying
const multiply = function(val1,val2) {
    console.log(val1 * val2)
   };
   
//Dividing
const divide = function(val1, val2){
    console.log(val1/val2)
};

//Exponents
const power = function(val1,val2) {
    console.log(val1 ** val2)
   };
   
   
//Factorials
const factorial = function(val) {
   // Factorials can't be less than zero
   if (val < 0) {
       console.log('Error');
   }
   // Factorial of zero is 1
   else if (val === 0) {
       console.log(`The factorial of ${val} is 1.`);
   }
   // For every positive number n! = n × (n−1)!
   // Test case 4 = 24 Eg: 4! = 4 × 3 × 2 × 1 = 24
   else {
       let fact = 1;
       for (i = 1; i <= val; i++) {
           fact *= i;
       }
       console.log(fact);
   }
   };
   
   

   
   