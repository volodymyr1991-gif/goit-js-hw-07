const inputRef = document.querySelector('input[type="range"]');
const spanRef = document.querySelector("#text");

inputRef.addEventListener("input", addSpanBigFontSize);
function addSpanBigFontSize() {
  if (spanRef.style.fontSize !== "50px") {
    spanRef.style.fontSize = "50px";
  }
}
