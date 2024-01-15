function greeting() {
    alert("Hello there my friend!")
}

// takes in the argument "John Doe" from index.html and passes it to the fn
function greetingWithName(userName) {
    alert(`Hello there my friend! You must be ${userName}!`)
}

// takes in the arguments 2 & 6 from index.html and passes it to the fn
function addTwoNumbers(x, y) {
    const sum = x + y
    console.log("The sum of", x, "and", y, "is: ", sum)
}


// checks if the arguments are valid, if so it passes them to divideTwoNumbers()
function divideTwoNumbersPrompt() {
    const x = prompt("Enter the first number", "0")
    const y = prompt("Enter the second number", "0")
    if(isNaN(x) || isNaN(y)) {
        console.log("The input must be numbers!")
        return;
    }
    divideTwoNumbers(x, y)
}

// takes in the arguments as parameters, checks for zeroes, if not, logs quotient.
function divideTwoNumbers(x, y) {
    if (x == 0 || y == 0) {
        console.log("You cannot divide by 0!")
        return;
    }
    console.log(`${x} divided by ${y} is ${x / y}`)
}