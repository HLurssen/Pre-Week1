// WHAT IS AN ARRRAY?
// ORDERED DATA STRUCTURE


var firdtName = "Henry"
var lastName = "Lurssen"
var email = "hl@gmail.com"

//             0         1                 2              // ARRAYS START AT 0
var user = ["Henry", "Lurssen", "henrylurssen@gmail.com"] // INITIALIZED AN ARRAY WITH VALUES INSIDE 

console.log("USER BEFORE THE PUSH", user)
// TO ADD DATA
user.push("123-456-7890")
user.push (24)
console.log("USER AFTER THE PUSH", user)


// TO REMOVE DATA
user.pop()
var removedValue = user.pop()
console.log("REMOVED VALUE FROM POP", removedValue)
user.pop("USER AFTER THE POP: ", user)


// ACCESS DATA
console.log("LAST NAME:", user[1])
console.log(user[2])
console.log(user[0])


// UPDATE DATA
user[0] = "Meep"
user[2] = "hl@gmail.com"
console.log ("USER AFTER NAME CHANGE", user)

// LENGTH OF THE ARRAY
console.log("LENGTH OF ARRAY", user.length)
user.push("Something")
console.log("LENNGTH OF ARRAY", user.length)


// ACCESS THE LAST VALUE IN AN ARRAY
console.log(user[user.length - 1])


// ACCESS THE FIRST VALUE IN AN ARRAY
console.log(user[0]) 



var arr = [1,2,3]
arr [100] = "Hello" // CREATED 100 INCREMENTS TO GET TO "Hello"
console.log(arr.length) 