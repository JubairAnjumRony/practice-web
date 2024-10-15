function greetings (greetingHandler,name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('good morning',name);
}
 function greetEvening(name){
    console.log('good evening',name);
 }
greetings(greetingHandler,'toma hatun');
greetings(greetingHandler,'nirob khan');
greetings(greetEvening,'ontu ');

function greet(greetingHandler){
  greetingHandler();
}

function greetingHandler2(){
    console.log('google it you idiot');
}

greet(greetingHandler2);
