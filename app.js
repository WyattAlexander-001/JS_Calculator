//What user inputs into that input box, you save it to a variable
let result = document.getElementById('inputText');

let calculate=(number)=>{
    //value is zero to start
    result.value+=number;
}

//Works with all common calculations



let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert('Enter a valid input')
    }
}



function clr(){
    result.value= '';
}

function del(){
    //0 is start and -1 is end. Eg: 789, 9 is the end.
    result.value=result.value.slice(0,-1)
}



   
   

   
   