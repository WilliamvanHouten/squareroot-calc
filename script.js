// Try statement defines the code block to run
try {
  const number = parseFloat(calculatorForm.screen.value);
  if (isNaN(number)) {
    throw new Error("Invalid input");
  }
  if (number <= 0) {
    throw new Error("Sorry, I cannot calculate the square root of a negative number!");
  }
  calculatorForm.screen.value = Math.sqrt(number);
} catch (error) {
  console.log(error.message);
  if (calculatorForm.screen.value !== "") {
    console.log("Sorry, cannot calculate the square root of a negative number");
    calculatorForm.screen.value = error.message;
  }
}

// Clear function to clear the output
function Clear() {
  calculatorForm.screen.value = "";
}

// Function to append the clicked value to the screen
function valueButton(e) {
  calculatorForm.screen.value += e.value;
}

// Function calculating the square root of a given number.
function Calculate() {
  const number = parseFloat(calculatorForm.screen.value);
  if (isNaN(number) || calculatorForm.screen.value === "") {
    console.log("Invalid input");
    calculatorForm.screen.value = "";
    return;
  }
  if (number <= 0) {
    console.log("Sorry, I cannot calculate the square root of a negative number!");
    calculatorForm.screen.value = "Invalid Input";
    return;
  }
  calculatorForm.screen.value = Math.sqrt(number);
}


