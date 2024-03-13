import { signal } from "@preact/signals";
import Big from "https://unpkg.com/big.js@6.2.1/big.mjs";

export const textArea1 = signal<string>("");
export const textArea2 = signal<string>("");
export const precision = signal<string>(""); // Default precision to 2 decimal places
export const resultArea = signal<string>("");
export const operationValue = signal("");

let activeButton: HTMLButtonElement | null = null; // Store the currently active button

export const storeValue = (type: string, value: string) => {
  if (type === "t1") {
    textArea1.value = value;
  } else if (type === "t2") {
    textArea2.value = value;
  } else if (type === "t3") {
    // Validate precision input to prevent errors (optional)
    const parsedPrecision = parseInt(value, 10);
    if (!isNaN(parsedPrecision) && parsedPrecision >= 0) {
      precision.value = value;
    } else {
      // Handle invalid precision input (e.g., display error message)
      console.error("Invalid precision value. Please enter a non-negative integer.");
    }
  }
};

export const operation = (e: Event) => {
  const target = e.target as HTMLButtonElement;

  // Remove active class from the previously active button (if any)
  if (activeButton) {
    activeButton.classList.remove("active");
  }

  const num1 = new Big(textArea1.value);
  const num2 = new Big(textArea2.value);
  const precisionValue = parseInt(precision.value, 10) || 0; // Use default 0 if empty or invalid

  switch (operationValue.value) {
    case "+":
      const add = num1.plus(num2).toFixed(precisionValue);
      resultArea.value = add;
      break;
    case "-":
      const sub = num1.minus(num2).toFixed(precisionValue);
      resultArea.value = sub;
      break;
    case "*":
      const mul = num1.times(num2).toFixed(precisionValue);
      resultArea.value = mul;
      break;
    case "/":
      const div = num1.div(num2).toFixed(precisionValue);
      resultArea.value = div;
      break;
    case "%":
      const mod = num1.mod(num2).toFixed(precisionValue);
      resultArea.value = mod;
      break;
    case "^":
      const pow = num1.pow(+(num2)).toFixed(precisionValue);
      resultArea.value = pow;
      break;
    case "clear":
      textArea1.value = "";
      textArea2.value = "";
      resultArea.value = "";
      precision.value=""
      break;
    default:
      break;
  }

  // Update the active button reference
  activeButton = target;
  target.classList.add("active");
};