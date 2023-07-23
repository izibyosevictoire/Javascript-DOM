// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }

// Function to get all rotations of a number
function getRotations(num) {
    const numStr = num.toString();
    const rotations = [num];
  
    for (let i = 1; i < numStr.length; i++) {
      const rotation = parseInt(numStr.slice(i) + numStr.slice(0, i), 10);
      rotations.push(rotation);
    }
  
    return rotations;
  }
// Function to find the number of circular primes below the given number
function findCircularPrimes() {
    const inputElement = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");
    const number = parseInt(inputElement.value);

    if (isNaN(number) || number < 100 || number > 100000) {
        resultElement.textContent = "Please enter a valid number ";
        return;
    }
    let count = 0;

    for (let i = 2; i < number; i++) {
      if (isPrime(i)) {
        const rotations = getRotations(i);
        if (rotations.every(isPrime)) {
          count++;
        }
      }
    }
    resultElement.textContent = ` ${number}: ${count}`;
}
