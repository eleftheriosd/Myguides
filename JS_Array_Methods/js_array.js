const items = [
    {name:'Bike' , price:100},
    {name:'TV' , price:200},
    {name:'Album' , price:10},
    {name:'Book' , price:5},
    {name:'Phone' , price:500},
    {name:'Computer' , price:1000},
    {name:'Keyboard' , price:25}
]

// Filter Method 
//e.g filter for  less than 100 price
//original array will not change

const filteredItems = items.filter((item)=>{
    return item.price <=100;
})

console.log(items)
console.log(filteredItems)

// Map Method
//e.g convert array to new array with different data

const itemNames = items.map((item)=>{
    return item.name;
})
const itemPrices = items.map((item)=>{
    return item.price;
})
console.log(itemNames)

// Find Method
//find single object in Array
//returns first one with statement true

const foundItem = items.find((item)=>{
    return item.name=== 'Book';
})
console.log(foundItem)

// Foreach Method
//loop through array
items.forEach((item)=>{
    console.log(item.name) 
})

// Some function
//returns true or false
//returns true for first true value

const hasInexpensiveItems= items.some((item)=>{
    return item.price <=100;
})

console.log(hasInexpensiveItems)

// Some function
//returns true or false
//returns true if all values are true

const Inexpensive= items.every((item)=>{
    return item.price <=1000;
})

console.log(Inexpensive)

// Reduce function
//operations on array
//returns combination of operations
//gets as input a function and a number
//second parameter (the number)declares starting point
//first parameter (the function) gets 2 inputs
//second input item we iterating over
//first input  is what the previus iteration returned

const total= items.reduce((currentTotal,item)=>{
    return item.price +currentTotal
},0)

console.log(total)

// Includes method
//check if value is included in array

const items1=[1,2,3,4,5]

const includesTwo= items.includes(2);

console.log(includesTwo);


