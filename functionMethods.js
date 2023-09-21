// Three types of function methods ..

// Apply ,call , bind ..



let name ={
    firstName:"surenthar",
    lastName:"kumar",
    printFullName:function(){
        console.log(this.firstName+ " "+this.lastName+ "" +place);
    }
}

name.printFullName(place);
let name1 ={
    firstName :"arun",
    lastName: "kumar",
}

name.printFullName.call(name1,"pmk")








// let printFullName =function(hometown,state){
//     console.log(this.fristname+" "+this.lastName+ "from" +hometown+","+state);
// }

// // function borrowing ...

// printFullName.call(name, "pmk", "tn");
// let name1 ={
//     fristName: "surenthar",
//     lastName:"Kumer",

// }
// printFullName.call(name1,"kpmk",Tn);
// printFullName.apply(name1,["kpmk","tn"])