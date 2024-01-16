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

// works the same as example above, but simplified
function findAreaPrompt() {
    const x = prompt("Enter the length of the horizontal side in meters.", "0")
    const y = prompt("Enter the length of the vertical side in meters.", "0")
    if(isNaN(x) || isNaN(y)) {
        console.log("The lengths must be numbers!")
        return;
    }
    findArea(x, y)
}

// works the same as example above, but simplified
function findArea(x, y) {
    console.log(`The area of the provided box is ${x * y} square meters.`)
}

function enterNamePrompt() {
    const firstName = prompt("Enter your first name.", "John")
    const lastName = prompt("Enter your last name.", "Doe")
    greetNewName(firstName, lastName)
}

function greetNewName(firstName, lastName) {
    alert(`Greetings ${firstName} ${lastName}!`)
}

function convertDistancePrompt() {
    const distanceInKms = prompt("Enter the distance in kilometers.", "0")
    convertDistance(distanceInKms)
}

function convertDistance(distanceInKms) {
    const distanceInMiles = distanceInKms / 1.60934
    const approxMiles = Math.floor(distanceInMiles)
    console.log(`${distanceInKms} kilometers is approximately ${approxMiles} miles.`)
}

function convertTempPrompt() {
    const tempInC = prompt("Enter the temp in Celsius.", "0")
    convertTemp(tempInC)
}

function convertTemp(tempInC) {
    const tempInF = 9/5 * tempInC + 32
    const approxTempF = Math.floor(tempInF)
    console.log(`${tempInC} degrees Celsius is approximately ${approxTempF} degrees Fahrenheit.`)
}

function calculateMeanValue(values) {
    const sum = values.reduce((accum, current) => accum + current, 0)
    const mean = sum / values.length
    console.log(`The mean value of ${values} is ${mean}.`)
}

function calculateAgePrompt() {
    const agePrompt = prompt("Welcome to Systembolaget! Enter your age.", "0")
    calculateAge(parseInt(agePrompt))
}

function calculateAge(age) {
    if(age <= 14) {
        alert("Get outta here!")
    } else if(age >= 15 && age <= 17) {
        alert("Sorry, you're not old enough.")
    } else if(age >= 18 && age <= 19) {
        alert("Sorry, you must be at least 20, why don't you try a bar instead?")
    } else if(age >= 20 && age <= 80) {
        alert("Thank you! Welcome!")
    } else if(age > 80) {
        alert("I'm sorry, where is your caretaker?")
    }
}

function calculateSum(arr) {
    const sum = arr.reduce((accumulator, current) => accumulator + current, 0)
    console.log(`total sum of ${arr} is ${sum}.`)  
}

function showSkills(Person) {
    const name = Person.Person.name
    const skills = Person.Person.skills
    console.log(`These are ${name}'s skills: ${skills}`)
}