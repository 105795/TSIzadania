const num = 7;
function factorialCalculator(userNumber) {
  let result = 1;
  for (let i = userNumber; i >= 1; i--) {
      result = result * i;
  }
  return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

