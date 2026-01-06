/* ========================================
   Calculator App - JavaScript Logic
   Fully Functional Calculator
   ======================================== */

// Calculator State
const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
  expression: "",
};

// DOM Elements
const display = document.getElementById("display");
const expressionDisplay = document.getElementById("expression");
const buttonsGrid = document.querySelector(".buttons-grid");

// Initialize
function init() {
  updateDisplay();
  buttonsGrid.addEventListener("click", handleButtonClick);
  document.addEventListener("keydown", handleKeyboard);
}

// Update Display
function updateDisplay() {
  // Format number for display (add commas for thousands)
  const formattedNumber = formatNumber(calculator.displayValue);
  display.value = formattedNumber;
  expressionDisplay.textContent = calculator.expression;

  // Adjust font size for long numbers
  adjustFontSize();
}

// Format number with commas
function formatNumber(numStr) {
  // Don't format if it contains error message
  if (isNaN(parseFloat(numStr)) && numStr !== "-") {
    return numStr;
  }

  // Split by decimal point
  const parts = numStr.split(".");

  // Format the integer part with commas
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
}

// Adjust font size for long numbers
function adjustFontSize() {
  const length = calculator.displayValue.length;
  if (length > 12) {
    display.style.fontSize = "1.6rem";
  } else if (length > 9) {
    display.style.fontSize = "2rem";
  } else if (length > 6) {
    display.style.fontSize = "2.4rem";
  } else {
    display.style.fontSize = "2.8rem";
  }
}

// Handle Button Clicks
function handleButtonClick(event) {
  const button = event.target.closest(".btn");
  if (!button) return;

  const action = button.dataset.action;
  const value = button.dataset.value;

  // Remove error state if present
  display.classList.remove("error");

  // Add click animation
  button.style.transform = "scale(0.95)";
  setTimeout(() => {
    button.style.transform = "";
  }, 100);

  switch (action) {
    case "number":
      inputDigit(value);
      break;
    case "operator":
      handleOperator(value);
      break;
    case "calculate":
      calculate();
      break;
    case "decimal":
      inputDecimal();
      break;
    case "clear":
      clearCalculator();
      break;
    case "toggle-sign":
      toggleSign();
      break;
    case "percentage":
      percentage();
      break;
  }

  updateDisplay();
}

// Handle Keyboard Input
function handleKeyboard(event) {
  const key = event.key;

  // Remove error state
  display.classList.remove("error");

  // Number keys
  if (/^[0-9]$/.test(key)) {
    event.preventDefault();
    inputDigit(key);
  }

  // Operators
  if (["+", "-", "*", "/"].includes(key)) {
    event.preventDefault();
    handleOperator(key);
  }

  // Enter or = for calculate
  if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  }

  // Decimal
  if (key === ".") {
    event.preventDefault();
    inputDecimal();
  }

  // Clear (Escape or c)
  if (key === "Escape" || key.toLowerCase() === "c") {
    event.preventDefault();
    clearCalculator();
  }

  // Backspace
  if (key === "Backspace") {
    event.preventDefault();
    backspace();
  }

  // Percentage
  if (key === "%") {
    event.preventDefault();
    percentage();
  }

  updateDisplay();
}

// Input a digit
function inputDigit(digit) {
  if (calculator.waitingForSecondOperand) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    // Limit input length
    if (calculator.displayValue.replace(/[^0-9]/g, "").length >= 15) {
      return;
    }

    calculator.displayValue =
      calculator.displayValue === "0" ? digit : calculator.displayValue + digit;
  }
}

// Input decimal point
function inputDecimal() {
  if (calculator.waitingForSecondOperand) {
    calculator.displayValue = "0.";
    calculator.waitingForSecondOperand = false;
    return;
  }

  if (!calculator.displayValue.includes(".")) {
    calculator.displayValue += ".";
  }
}

// Handle operator
function handleOperator(nextOperator) {
  const inputValue = parseFloat(calculator.displayValue);

  // Update visual state for operator buttons
  updateOperatorButtonState(nextOperator);

  if (calculator.operator && calculator.waitingForSecondOperand) {
    // Change operator without calculating
    calculator.operator = nextOperator;
    updateExpression();
    return;
  }

  if (calculator.firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (calculator.operator) {
    const result = performCalculation();

    if (result === "Error") {
      showError();
      return;
    }

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  updateExpression();
}

// Update expression display
function updateExpression() {
  const operatorSymbols = {
    "+": "+",
    "-": "−",
    "*": "×",
    "/": "÷",
  };

  if (calculator.firstOperand !== null && calculator.operator) {
    calculator.expression = `${calculator.firstOperand} ${
      operatorSymbols[calculator.operator]
    }`;
  }
}

// Update operator button visual state
function updateOperatorButtonState(activeOperator) {
  // Remove active class from all operator buttons
  document.querySelectorAll(".btn-operator").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Add active class to current operator
  const activeBtn = document.querySelector(`[data-value="${activeOperator}"]`);
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
}

// Perform calculation
function performCalculation() {
  const secondOperand = parseFloat(calculator.displayValue);

  if (calculator.operator === "/" && secondOperand === 0) {
    return "Error";
  }

  let result;

  switch (calculator.operator) {
    case "+":
      result = calculator.firstOperand + secondOperand;
      break;
    case "-":
      result = calculator.firstOperand - secondOperand;
      break;
    case "*":
      result = calculator.firstOperand * secondOperand;
      break;
    case "/":
      result = calculator.firstOperand / secondOperand;
      break;
    default:
      return secondOperand;
  }

  // Handle floating point precision
  return Math.round(result * 1000000000) / 1000000000;
}

// Calculate result
function calculate() {
  if (calculator.operator === null || calculator.waitingForSecondOperand) {
    return;
  }

  // Remove active operator state
  document.querySelectorAll(".btn-operator").forEach((btn) => {
    btn.classList.remove("active");
  });

  const operatorSymbols = {
    "+": "+",
    "-": "−",
    "*": "×",
    "/": "÷",
  };

  const secondOperand = parseFloat(calculator.displayValue);
  const result = performCalculation();

  if (result === "Error") {
    showError();
    return;
  }

  // Show full expression
  calculator.expression = `${calculator.firstOperand} ${
    operatorSymbols[calculator.operator]
  } ${secondOperand} =`;

  calculator.displayValue = String(result);
  calculator.firstOperand = result;
  calculator.operator = null;
  calculator.waitingForSecondOperand = false;
}

// Show error
function showError() {
  calculator.displayValue = "Error";
  calculator.firstOperand = null;
  calculator.operator = null;
  calculator.waitingForSecondOperand = false;
  calculator.expression = "";
  display.classList.add("error");

  // Remove active operator state
  document.querySelectorAll(".btn-operator").forEach((btn) => {
    btn.classList.remove("active");
  });
}

// Clear calculator
function clearCalculator() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  calculator.expression = "";

  // Remove active operator state
  document.querySelectorAll(".btn-operator").forEach((btn) => {
    btn.classList.remove("active");
  });
}

// Toggle sign (+/-)
function toggleSign() {
  const currentValue = parseFloat(calculator.displayValue);

  if (currentValue !== 0) {
    calculator.displayValue = String(currentValue * -1);
  }
}

// Percentage
function percentage() {
  const currentValue = parseFloat(calculator.displayValue);
  calculator.displayValue = String(currentValue / 100);
}

// Backspace
function backspace() {
  if (calculator.waitingForSecondOperand) {
    return;
  }

  if (
    calculator.displayValue.length === 1 ||
    (calculator.displayValue.length === 2 &&
      calculator.displayValue.startsWith("-"))
  ) {
    calculator.displayValue = "0";
  } else {
    calculator.displayValue = calculator.displayValue.slice(0, -1);
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", init);
