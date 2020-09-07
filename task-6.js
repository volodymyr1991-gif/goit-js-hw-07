const inputRef = document.querySelector("#validation-input");

const dataRef = document.querySelector('input[data-length="6"]');

inputRef.addEventListener("blur", validInput);

const dataValue = Number(dataRef.dataset.length);
// console.log(event.target.getAttribute('datalength'));
function validInput(event) {
  console.log(event.target.getAttribute('datalength'));
  console.log(event.target.value.length);
  if (event.target.value.length === dataValue) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
}
