const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sortStringAlphabetically() {
  rl.question("Enter a string: ", (userInput) => {
    if (userInput.trim() === "") {
      console.log("Invalid input. Please enter a non-empty string.");
      rl.close();
      return;
    }
    const sortedString = userInput.split('').sort().join('');
    console.log(`Sorted String: ${sortedString}`);
    rl.close();
  });
}
sortStringAlphabetically();
