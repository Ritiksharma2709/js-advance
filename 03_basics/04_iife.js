//immediately invoked function exxpression

(function chai(){
    //named iife
    console.log(`DB CONNECTED`)
})();
((name)=>{
    //simple iife
    console.log(`DB CONNECTED TWO ${name}`)
})('ritik')

