'use strict';

var updateContent = function(data) {
    for(i = 1; i < data.length; i = i + 1) {

        if(data[i].state == "Maharashtra" || data[i].state == "Gujarat") {

            console.log(data[i].name);
}


var loadContent = function() {
    
    // Create ajax object
    var request = new XMLHttpRequest();

    // Open a connect to a URL
    request.open("get", "data.json");

    // Send the request to the server resource.
    request.send();

    // Receive the data and do some thing with it.
    request.onreadystatechange = function(data) {
        if(request.readyState == 4 && request.status == 200) {
            var jsonData =  JSON.parse(request.responseText)
            updateContent(jsonData);
        }
    }    