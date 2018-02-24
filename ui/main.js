console.log('Loaded!');

var element = document.getElementById('main-text');
element.InnerHTML = 'New Value';

var button = document.getElementById('counter');
var counter = 0;

button.Onclick = function(){
    
    var request = new XMLHttprequest();
    
    request.onreadystatechange = function() {
        
    } 
    
    counter = counter+1;
    var span = document.getElementById('counterSpan');
    span.InnerHTML = counter.toString();
}
