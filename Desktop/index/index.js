let str = prompt('Please enter amount of Money')
let userNum = Number(str)
console.log(userNum)
function checkUser(userInput){
    if(Object.is(userInput, NaN) || userNum <= 0){
        alert('Please Enter number')
    }
    return userInput
}
let number = checkUser(userNum);
function getAmount(amount){
    let nairaSymbol = '#'
    if(amount <= 5000){
        return nairaSymbol + 10
    }else if(amount > 5000 && amount <=50000){
        return nairaSymbol + 25
    }
    return nairaSymbol + 50
}

console.log(getAmount(number));
