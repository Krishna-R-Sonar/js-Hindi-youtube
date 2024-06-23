/* const promiseOne = new Promise(function(resolve, reject){
    // do asyn task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 10000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyn task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chia", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Krishna", password: "123"});
        } else{
            reject('Error: Something went wrong');
        }
    }, 1000)
});

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    // catch() => Attaches a callback for only the rejection of the Promise.
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")); */

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Javascript", password: "123"});
        } else{
            reject('Error: JS went wrong');
        }
    }, 1000)
});

/* async function consumePromiseFive(){
    const response = await promiseFive;
    console.log(response);

    if error is false else part is not executed due to use of async await and the error shown will be if ran =>
        [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error: JS went wrong".] {
  code: 'ERR_UNHANDLED_REJECTION'
}

so we can use try and catch block to resolve the error 
} */

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    } catch (error){
        console.log(error);
    }
}

// consumePromiseFive();

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log("E: ", error);
    }
}

// getAllUsers();

// the above getAllUser() can be done by using .then() and .catch()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error));