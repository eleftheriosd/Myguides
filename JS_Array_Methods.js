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

const InexpensiveItems= items.every((item)=>{
    return item.price <=1000;
})

console.log(InexpensiveItems)

const total= items.every((item)=>{
    return item.price <=1000;
})

console.log(total)



