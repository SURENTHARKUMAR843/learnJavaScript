/*
at ()

concat()


copywithin()

entries()

indexof()

isArray()

join()

keys()

lastIndexof()

length()

map()

pop()

prototype()

push()

reduce()

reduceRight()

reverse()

shift()

slice()

some()

sort()

splice()

tostring()

unshift()

valueof()

*/


// Example ...

// concat()

// let a=[2,3,4,5,6,7]
// let b=[8,9,10]
// let c =a.concat(b)
// console.log(c)


// length()

let arr =[1,2,3,5,6,7,9,4];
let arr1 =["sk","pmk","SA"];
console.log(arr.length)               // Return to array of length

console.log(arr.toString())          // all array in string and number in  comma oder

console.log(arr.pop())               // return to last value remove   display in remove value

console.log(arr.push("sa"))           // last add in value display intex value

console.log(arr.shift())               // First value remove in array display in remove value..

console.log(arr.unshift(1))            // First value add in array display in index value .

console.log(arr.splice(0,1,11))         // first index value ,second delete count , three add value
console.log(arr)


console.log(arr.slice(1,4))              // first start in index value  last index value in -1 in display 
// console.log(arr)



console.log(arr.sort())
console.log(arr.reverse())                // reverse oder in array 

console.log(arr.copyWithin())            // array in one copy 

console.log(arr.fill(arr)) 




// Array.map()..


let array =[1,4,9,16]

let array1 =array.map((x) => x+1);
console.log(array1)