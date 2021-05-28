let string = prompt('State Money Value')
let userNum = Number(string)

function check(userEntry){
    if(Object.is(userEntry, NaN) || userNum <= 0){
        alert('Please Enter number')
    }
    return userInput
}
let number = check(userNum);
function getAmount(amount){
    let nairaSymbol = '#'
    if(amount <= 5000){
        return nairaSymbol + 10
    }else if(amount > 5000 && amount <=50000){
        return nairaSymbol + 25
    }
    return nairaSymbol + 50
}

alert(getAmount(number));


// pseudocode for commission calculator 

// use function to get user input.
// convert to number with built in function
// write function to check the validity of user input
// check if the number function return NaN
// if it returns NaN, request user to enter number
// else call the function and store in a variable
// the above variable will be used to call another function which checks if the amount is less than or equal to 5000 then the return is 10
// if the amount is greater than 5000 and less than or equal 50000 then the return is 25
// if above 50000 it returns 50
