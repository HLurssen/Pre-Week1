// WHAT CAN WE STORE INSIDE OF AN ARRAY
var user = ["Henry", "Lurssen", 24, '508-409-7517', true]

var auntsContact = ["Jayne", "Smithe", "123 Main Street", "Seattle"]

// WHAT SHOULD WE STORE INSIDE OF AN ARRAY
// 1 All values inside of an array should be of the same data type 
// 2 All the values inside of an array should be of similar information.
var numberArray = [4,3,6,9,3,4,0,1]
var namesArray = ["Alessandro", "Ivone", "Manchas"]


// ARRAYS AND LOOPS

// ITERATING THROUGH AN ARRAY (numberArray)
for(var i = 0; i < numberArry.length ; i++){
    console.log(i) // PRINT THE INDEX
    console.log(numberArray[i]) // PRINT THE VALUE
}

// ITERATING THROUGH AN ARRAY (namesArray)
for(var i = 0; i < namesArry.length ; i++){
    console.log(i) // PRINT THE INDEX
    console.log(namesArray[i]) // PRINT THE VALUE
}

// ITERATE THROUGH namesArray BACKWARDS
for(var i = namesArray.length - 1; i >= 0; i--){

}






function normalIterate(array){
    for(var i = 0; i < namesArry.length ; i++){
        console.log(i) // PRINT THE INDEX
    console.log(array[i]) // PRINT THE VALUE
    }
}
var alphabet = ['a','b','c','d']


normalIterate([[4,3,6,9,3,4,0,1]])
normalIterate(["Alessandro", "Ivone", "Manchas"])
normalIterate(alphabet)


function reverseIterate(array){
    for(var i = array.length - 1; i >=0; i--){
        console.log(`INDEX: ${i} VALUE: ${array[i]}`)
    }
}   



//----------------------------------------------//

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for(var i = 1; i < arr.length; i = i + 2) {
    sum = sum + arr[i];
    console.log(arr[i]);
    console.log(sum);
}

//-----------------------------------------------//

var arr = [8, 2, 0, 6, 12, 4, 3];
for(var i = 0; i < arr.length; i++){
    if(arr[i] >= 6) {
        console.log(true);
    }
}