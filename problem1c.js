/* 3) Write an arrow function that will take a parameter and will check if the
parameter is a number or not by using isNaN(). And return true or false. */

const valueCheck = x => {
    if(typeof x === "number"){
        return true;
    }
    else{
        return false
    }
}

// console.log(valueCheck(3))
// console.log(valueCheck("3"))