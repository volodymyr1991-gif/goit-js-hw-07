const inputRef = document.querySelector('input[type="range"]');
const spanRef = document.querySelector("#text");

inputRef.addEventListener("input", addSpanBigFontSize);
function addSpanBigFontSize() {
  if (inputRef.value > 50) {
    spanRef.style.fontSize = "50px";
  } else {
    spanRef.style.fontSize = "30px";
  }
}
