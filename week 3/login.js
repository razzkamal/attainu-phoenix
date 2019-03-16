var signOperation = function() {
    var inputValue = document.getElementById("username").value;
    var inputValue = document.getElementById("password").value;
    if(inputValue =="") {
        alert("please enter something");
        return;
    }
    
}

//get value
var signButton = document.getElementById("signButton");
//Event Listener
signButton.addEventListener("click", signOperation);