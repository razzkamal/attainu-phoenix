/*
A simple Calculator.
Raj kamal
*/
//plus operation
plusButton = document.getElementById("plusButton");
plusOperation = function() {

    input1 = document.getElementById("input1");
    input2 = document.getElementById("input2");

    sum = parseInt(input1.value) + parseInt(input2.value);

    result = document.getElementById("result");
    result.innerText = sum;
}
plusButton.addEventListener("click", plusOperation);

//minus operation
minusButton = document.getElementById("minusButton");
minusOperation = function() {

    input1 = document.getElementById("input1");
    input2 = document.getElementById("input2");

    difference = parseInt(input1.value) - parseInt(input2.value);

    result = document.getElementById("result");
    result.innerText = difference;
}
minusButton.addEventListener("click", minusOperation);

//multi opeartion
mulButton = document.getElementById("mulButton");
mulOperation = function() {

    input1 = document.getElementById("input1");
    input2 = document.getElementById("input2");

    multiple = parseInt(input1.value) * parseInt(input2.value);

    result = document.getElementById("result");
    result.innerText = multiple;
}
mulButton.addEventListener("click", mulOperation);

//divide opeation
divButton = document.getElementById("divButton");
divOperation = function() {

    input1 = document.getElementById("input1");
    input2 = document.getElementById("input2");

    divide = parseInt(input1.value) / parseInt(input2.value);

    result = document.getElementById("result");
    result.innerText = divide;
}
divButton.addEventListener("click", divOperation);

