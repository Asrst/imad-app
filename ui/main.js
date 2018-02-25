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
};

// name 

var nameInput  = document.getElementById('name');
var name  = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.Onclick = function() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE) {
            if(request.status === 200){
                
        var names = ['name', 'name2'];
        var list = '';
        for (i=0; i < names.length; i++) {
        list+= '<li>'+ names[i] + '</li>' ;
                
            }
             var ul = document.getElementById('namelist');
             ul.InnerHTML = 'list';
        }
   
    }
    
    request.open('GET', 'http://addasaiteja.imad.hasura-app.io/', true);
    request.send(null);
    
    };
    
  
   
};

