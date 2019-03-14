'use strict';

var stack = [];
 
var showStackContent = function() {
    //update the displye here
    var stackDisplay = document.getElementById("stackDisplay");
    stackDisplay.innerText = stack.join(" ");
}

var pushOperation = function() {
    var inputValue = document.getElementById("inputText").value;
    //validate the input here
    if(inputValue == "") {  
        alert("please enter something to add to stack");
        return;
    }
    //add the element to here
    stack.push(inputValue);

    showStackContent();
   
    
};
 
var popOperation = function() {
    stack.pop();
 showStackContent();
}  

    
// for getting value
var pushbutton = document.getElementById("pushButton");
var popbutton = document.getElementById("popButton");

//for event listner
pushbutton.addEventListener("click", pushOperation);
popbutton.addEventListener("click", popOperation);