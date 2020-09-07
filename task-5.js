const inputRef = document.querySelector("#name-input");
const nameLabelRef = document.querySelector("#name-output");

inputRef.addEventListener("input", addTargetText);

function addTargetText(event) {
  if (event.target.value !== "") {
    nameLabelRef.textContent = event.target.value;
  } else {
    nameLabelRef.textContent = "незнайомець";
  }
}
