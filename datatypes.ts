/**
 * string definition not neccessary.
 */
let lname: string = "Martin";
let newName = lname.toUpperCase();
console.log(newName);

let age: number;
age = 25;
age = 25.5;

let toParse = "25";
let result = parseInt(toParse);

// let isValid: boolean = undefined.
let isValid: boolean = false;
console.log(isValid)

let emptyList: string[];
emptyList = ["A", "B"]
let depList: Array<number>; //same
depList = [1,2]
let filterNum = depList.filter((num) => num > 1);
let find = depList.find(num => num === 2);
let sum = depList.reduce((prev, current) => {
    return prev + current
})

//with const this becomes in .js a number.
/*const*/enum Color {
    Red,
    Green,
    Blue
}
let c = Color.Blue;

let swapNumbs: [number, number];
function swapNumbers(num1: number, num2: number) : [number, number]
{
    return [num2, num1]
}
swapNumbs = swapNumbers(10,20);

let department: any;
department = 20
department = "20"