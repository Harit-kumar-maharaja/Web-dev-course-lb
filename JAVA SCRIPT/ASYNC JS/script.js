function sync(){
    console.log('First');
}

console.log('second');

//Promises 

let mypromise = new Promise(function(resolve , reject){

})

//fetch api

async function utility(){
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let output = await content.json();
    console.log(output);
}
 utility();