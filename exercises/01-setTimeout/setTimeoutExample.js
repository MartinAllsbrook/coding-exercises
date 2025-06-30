/* 
Set timout delays the execution of a function by a specified number of milliseconds. This is very useful
for creating delays in your code. 
*/

// ### Example 1 ###
// This first example waits 2 secconds after a button is clicked before execulting a console log.

document.getElementById("example-1-button").addEventListener("click", () => {
    console.log("Button clicked! Waiting for 2 seconds...");

    setTimeout(() => {
        console.log("This message is delayed by 2 seconds.");
    }, 2000);
});

// The setTimeout function takes a function as an argument wich looks a little wierd at first


// ### Example 2 ###
// Here is a example that may be a little easier to interpret. It will run as soon as the page loads
// Fist we create the function that we want to run after the delay 
function delayedMessage() {
    console.log("The page loaded 3 seconds ago.");
}

// Then we call the setTimeout function and pass it the function we want to
setTimeout(delayedMessage, 3000);

// ### Example 3 ###
// What do you think will happen if a function calls itself with a delay?

let time = 0; 
const interval = 1000; // The delay in milliseconds

function recursiveDelay() {
    // Log the current time in milliseconds
    console.log('This program has been running for ' + time + ' milliseconds')
    
    // Increment the time by interval
    time += interval; 
    
    // Call this function again after the interval has passed
    setTimeout(recursiveDelay, interval); 
}

// We need to call the function once to start the recursion
recursiveDelay();

// Check the webpage / html for your challenge