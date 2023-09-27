const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseNumber() {
  rl.question("Enter a number: ", (userInput) => {
    const num = parseFloat(userInput);
    if (isNaN(num)) {
      console.log("Invalid input. Please enter a valid number.");
      rl.close();
      return;
    }
    const reversedNum = parseFloat(num.toString().split("").reverse().join(""));
    console.log(`Reversed Number: ${reversedNum}`);
    rl.close();
  });
}
reverseNumber();
