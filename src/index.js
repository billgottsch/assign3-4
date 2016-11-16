
//PROMISES 3.4
//

//                                Promises
// Explain what is going on here.

var p = new Promise(function(res, rej){ //Creating a new Promise function
    setTimeout(() => res(1), 1000) //setting the timeout function to 1s.
                                  //after 1s release the next result
})

p.then(add1) //--> After the function above, .then will add "1" to the result
    .then(add1) //-->  After the function above, .then will add "1" to the result
    .then(add1) //-->  After the function above, .then will add "1" to the result
    .then(add1) //-->  After the function above, .then will add "1" to the result
    .then((v) => console.log(v)) //--> After the function above, log the value of "v" which is res(1) or "1"

function add1(v){ return v+1 } //function runs the add1 function and returns each .add1 into the value
//and returning v+4 which equals 5



//                            GEO PROMISE
/**
  Create function `getGeo()` that returns a Promise.

  This Promise will resolve to a coordinates object like:
  { lat: ..., long: ... }
  You should use `navigator.geolocation.getCurrentPosition(successCallback, errorCallback);`
  where successCallback and errorCallback are functions to handle the resolution or rejection of the promise.
  https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  **/

function getGeo(){
    var x = new Promise(function(resolve, reject){
      navigator.geolocation.getCurrentPosition(function(position){
        console.log('success', position);
        resolve({lat:position.coords.latitude, long:position.coords.longitude})
      }, function(){
        console.log('error');
        reject('error')
      });
    })
    return x;
}

getGeo().then(function(coords) {
    console.log('IF YOU DO NOT SEE ME IN CONSOLE, SOMETHING IS BROKEN');
    console.assert(typeof coords.lat === 'number');
    console.assert(typeof coords.long === 'number');
  });





// -------HOISTING-------------HOISTING--------------HOISTING---------------
// 1. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var myvar = 'my value';

(function() {
    console.assert(myvar === undefined)
    var myvar = 'local value';
})()




//(I had to put a semi-colon in the top line)
//The variable "myvar" was given a value, but it was outside of the scope of
//this function we're asserting. myvar is given a new value, but not until
//after the assert requests it. Therefor, myvar is undefined.

// 2. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var flag = true

function test() {
    if(flag) {
        var flag = false
    }
    else {
        flag = true
    }
    console.assert(flag === true)
}
test()

//We gave flag a value of true in the first line, which moves with the rest
//of the function throughout. We never change it's value we just ask it in an
//if statement if it's equal to false. So it stays as true.




// 3. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var message = 'Hello world'

function saySomething() {
    console.assert(message === undefined)
    var message = 'Foo bar'
}
saySomething()

// We are giving our function a new variable named message. Does this make the
//variable "message" undefined as we are making a variable inside our function?




// 4. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var message = 'Hello world'

function saySomething() {
    console.assert(message === 'Hello world')
    message = 'Foo bar'
}
saySomething()

//(in relation to the above answer)
//Whereas in this one we're not giving message as a new variable, but we're
//giving it a new value instead?




// 5. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
function test() {

    console.assert(a === undefined)
    console.assert(foo() === 2)

    var a = 1
    function foo() {
        return 2
    }
}
test()

//in the test function we're calling on the foo function and are returned a "2"
//because that's what the function was told to return. The variable "a" wasn't
//established until after the asserts have run. The function only runs once.




// 6.Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.

(function() {
    console.assert(bar === undefined)
    console.assert(foo() === 'undefined - :)')

    function foo() {
        return bar+' - :)'
    }

    var bar = 1
})()
