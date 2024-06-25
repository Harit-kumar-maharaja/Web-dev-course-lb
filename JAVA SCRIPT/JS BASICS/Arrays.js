let courses = [
    {
        no:1 , name:'love'
    },
    {
        no:2 , name : 'rahul'
    }
]

let course = courses.find(function(course){
    return course.name== 'love';
})

let coursee = courses.find(course => course.name == 'love')

console.log(course);

//spread operator 

let first = [1,2,3]
let second = [4,5,6]
let combined = [...first , ...second];
console.log(combined);

//iterating

let arr = [1,2,3,4,5]
for(let value of arr){
    console.log(value);
}

arr.forEach(element => {
   console.log(element); 
});

//filtering
let numbers = [1,2,3,-1,-2,-3]
let numberses = numbers.filter(value => value>=0)
console.log(numberses);

//function
function sum(a,b){
    return a+b;
}