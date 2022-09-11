/* Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third
parameter will be a string) that will perform arithmetic operation depending on the third parameter and
will print the result. For example:
1. Print result of num1+num2 if operation is “add”
2. Print result of num1-num2 if operation is “subtract”
3. Print result of num1*num2 if operation is “multiply”
4. Print result of num1/num2 if operation is “divide”
5. Print result of num1%num2 if operation is “modulus”
6. Else print “Invalid operation” */


const calculate = (a, b, string) =>{
    if(string === 'add'){
        return a + b;
    }
    if(string === 'subtract'){
        return a - b;
    }
    if(string === 'multiply'){
        return a * b;
    }
    if(string === 'divide'){
        return a / b;
    }
    if(string === 'modulus'){
        return a % b;
    }
    else{
        return 'invalid operation'
    }
}

console.log(calculate(2,3,'add'));
console.log(calculate(2,3,'subtract'));
console.log(calculate(2,3,'multiply'));
console.log(calculate(2,3,'divide'));
console.log(calculate(7,3,'modulus'));