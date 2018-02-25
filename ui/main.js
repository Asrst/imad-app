console.log('Loaded!');

var element = document.getElementById('main-text');
element.InnerHTML = 'New Value';

var button = document.getElementById('counter');
var counter = 0;

button.Onclick = function(){
    
    var request = new XMLHttprequest();
    
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE) {
            if(request.status === 200){
                
        var counter = request.responseText;
         counter = counter+1;
         var span = document.getElementById('counterSpan');
         span.InnerHTML = counter.toString();

            }
        }
        
    }
    
    request.open('GET', 'http://addasaiteja.imad.hasura-app.io/counter', true);
    request.send(null);
   
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
                
        var names = request.responseText;
        names = JSON.parse(names);
        var list = '';
        for (i=0; i < names.length; i++) {
        list+= '<li>'+ names[i] + '</li>' ;
                
            }
             var ul = document.getElementById('namelist');
             ul.InnerHTML = 'list';
        }
   
    }
    
    };
    
  request.open('GET', 'http://addasaiteja.imad.hasura-app.io/submit-name?name='+ name, true);
    request.send(null);
   
};

