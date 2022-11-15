//optional parameter
function add(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

//default parameter
const sub = (num1: number, num2: number, num3 = 10): number =>
  num1 - num2 - num3;

const mult = (num1: number, num2: number): number => {
  return num1 * num2;
};

//rest parameter
function add2(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

function getItems<T>(items: T[]): T[]
{
    return new Array<T>().concat(items);
}

let concatNum = getItems<number>([1, 2, 3]);
let concatString = getItems(["1", "2", "3"]);
