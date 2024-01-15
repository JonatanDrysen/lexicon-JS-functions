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
