import { signal } from "@preact/signals";
import Big from "https://unpkg.com/big.js@6.2.1/big.mjs";

export const textArea1 = signal<string>("");
export const textArea2 = signal<string>("");
export const resultArea = signal<string>("");
export const operationValue = signal("");

let activeButton: HTMLButtonElement | null = null; // Store the currently active button

export const storeValue = (type: string, value: string) => {
  if (type === "t1") {
    textArea1.value = value;
  }
  if (type === "t2") {
    textArea2.value = value;
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

  switch (operationValue.value) {
    case "+":
      const add=(num1.plus(num2)).toString()
      resultArea.value = add;

      // Update the active button reference
      activeButton = target;
      target.classList.add("active");
      break;
    case "-":
      const sub=(num1.minus(num2)).toString()
      resultArea.value = sub;
      activeButton = target;
      target.classList.add("active");
      break;
    case "*":
      const mul=(num1.times(num2)).toString()
      resultArea.value = mul;
      activeButton = target;
      target.classList.add("active");
      break;
    case "/":
      const div=(num1.div(num2)).toString()
      resultArea.value = div;
      activeButton = target;
      target.classList.add("active");
      break;
    case "%":
      const mod=(num1.mod(num2)).toString()
      resultArea.value = mod;
      activeButton = target;
      target.classList.add("active");
      break;
    case "^":
      const pow=(num1.pow(+(num2))).toString()
      resultArea.value = pow;
      activeButton = target;
      target.classList.add("active");
      break;
    case "clear":
      textArea1.value = "";
      textArea2.value = "";
      resultArea.value = "";
      break;
    default:
      break;
  }
};
