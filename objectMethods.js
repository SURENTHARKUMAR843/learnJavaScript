//  Object methods ...



/*
Object.assign()

Object.create()

Object.entrise()

Object.freeze()

Object .is()

Object.isExtensible()

Object.isFrozen()

Object.isSealed()

Object.keys()

Object.seal()

Object.setPrototypeOf()

Object.values()

*/




// Object.assign()


let obj1 ={
    name : "surenthar",
    age : 25,
    place : "pmk",
    state : "Tamil Nadu"
}

console.log(obj1)
console.log(Object.assign({lname : "kumar"},obj1))
//  property and value assign to object


// Object.create()..

// paremeter create in object value and add value ...


let obj2 ={
    name : "mani",
    age :25,
    place : "dgl",
    state : "Tamil Nadu"
};

// console.log(obj2)
let a = Object.create(obj2,{})
a.address = "CBE"
console.log(a.name)



// Object.entries()....

//  Object is change to array in key value per 

let obj3 ={
    name :"arun",
    age : 26,
    place : "cbe",
    state : "TN"
}

console.log(obj3)
console.log(Object.entries(obj3))


// Object.freeze()...

// object is freeze in object no value assign and no change in object key and prameter...

let obj4 ={
    name : "ashok",
    age : 25,
    place : "Rajapalayam",
    state : "TN"
};
console.log(obj4)
console.log(Object.freeze(obj4));
obj4 .name = "kumar"
console.log(obj4)


// Object.Seal()..


// not add new property...not delete property ... and property value change "pannikiraam"

let obj5 ={
    name : "sanjai",
    age : 28,
    place : "CBE",
    state : "TN"
};
console.log(obj5)
console.log(Object.seal(obj5))




// object.keys()..


// Return to object keys ..

let obj6 ={
    name : "kumar",
    age : 26,
    place : "KPMK"
};
console.log(obj6)
console.log(Object.keys(obj6))


// Object.value()....

// Return to values in object 

let obj7 = {
    name : "surenthar",
    age :25,
    place : "pmk",
    state : "TN"
};
console.log(obj7)
console.log(Object.values(obj7))