function add(a,b){
    return a+b
};
console.log(add(5,5))              //o/p ==>10

function loop(a){
 for(i=1;i<=a;i++){
    console.log("surenthar")       //o/p => 10 time print surenthar
 }
};
loop(10)



// hoisting...


console.log(sub(10,5))          // order change panni call pannalam its hoisting...
function sub(a,b){
    return(a-b)
};
