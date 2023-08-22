function addFunction(){

    //Ask to user to input any two numbers
    let number1 = parseInt(prompt("Please enter the First Number: "));
    let number2 = parseInt(prompt("Please enter the Second Number: "));

    //Result of two numbers will be stored in answer variable
    let answer = number1 + number2 ;

    //The answer will be print on browser using getelement by Id and .innerHTML
    document.getElementById("answerAddition").innerHTML = "The Answer of Addition is: " + answer ;
}

function modulusFunction(){

    //Ask to user to input any two numbers
    let modulusNumber1 = parseInt(prompt("Please enter the First Number: "))
    let modulusNumber2 = parseInt(prompt("Please enter the Second Number: "))

     //Result of two numbers will be stored in modulusAnwer variable
    let modulusAnswer = modulusNumber1 % modulusNumber2 ;

    //The answer will be print on browser using getelement by Id and .innerHTML
    document.getElementById("answerModulus").innerHTML = "The Answer of Modulus is: " + modulusAnswer ;
}