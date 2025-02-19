// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

async function getData() {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //instead above we use async and await

    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data= await x.json();
    console.log(data)

}


// console.log("laoding modules");
// console.log('DOing something');
// console.log('load data');
// let data = getData();
//await lies inside the async function hence we create main async funcrion
async function main(params) {
    console.log("laoding modules");
    console.log('DOing something');
    console.log('load data');
    let data = await getData();
    console.log(data);
    console.log('process data');
    console.log('task 2');

}
main();





// data.then((v) => {
//     console.log(data)
//     console.log('Process data');
//     console.log('Task 2');

// })

