const decrementBtn = document.querySelector('button[data-action ="decrement"]');
const incrementtBtn = document.querySelector(
  'button[data-action ="increment"]'
);

const spanValueRef = document.querySelector("#value");
let counterValue = Number(spanValueRef.textContent);

incrementtBtn.addEventListener("click", plusOneCounterValue);
decrementBtn.addEventListener("click", minusOneCounterValue);

function plusOneCounterValue() {
  spanValueRef.textContent = counterValue += 1;
}
function minusOneCounterValue() {
  spanValueRef.textContent = counterValue -= 1;
}
