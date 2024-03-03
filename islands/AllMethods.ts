import { signal } from "@preact/signals";

export const textArea1 = signal<string>('');
export const textArea2 = signal<string>('');
export const resultArea = signal<string>('');
export const operationValue = signal('');

let activeButton: HTMLButtonElement | null = null; // Store the currently active button

export const storeValue = (type: string, value: string) => {
  if (type === 't1') {
    textArea1.value = value;
  }
  if (type === 't2') {
    textArea2.value = value;
  }
};

export const operation = (e: Event) => {
  const target = e.target as HTMLButtonElement;

  // Remove active class from the previously active button (if any)
  if (activeButton) {
    activeButton.classList.remove('active');
  }

  switch (operationValue.value) {
    case '+':
      const num1 = Number(textArea1.value);
      const num2 = Number(textArea2.value);
      resultArea.value = String(num1 + num2);
        // Update the active button reference
      activeButton = target;
      target.classList.add('active');
      break;
    case '-':
      resultArea.value = String(Number(textArea1.value) - Number(textArea2.value));
      activeButton = target;
      target.classList.add('active');
      break;
    case '*':
      resultArea.value = String(Number(textArea1.value) * Number(textArea2.value));
      activeButton = target;
      target.classList.add('active');
      break;
    case '/':
      resultArea.value = String(Number(textArea1.value) / Number(textArea2.value));
      activeButton = target;
      target.classList.add('active');
      break;
    case '%':
      resultArea.value = String(Number(textArea1.value) % Number(textArea2.value));
      activeButton = target;
      target.classList.add('active');
      break;
    case '^':
      resultArea.value = String(Math.pow(Number(textArea1.value), Number(textArea2.value)));
      activeButton = target;
      target.classList.add('active');
      break;
    case 'clear':
      textArea1.value='';
      textArea2.value=''
      resultArea.value=''
      break;
    default:
      break;
  }


};
