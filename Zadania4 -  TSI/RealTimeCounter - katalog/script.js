   const textarea = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const maxChars = 50;

textarea.addEventListener('input', () => {
  let currentText = textarea.value;

  if (currentText.length > maxChars) {
    currentText = currentText.substring(0, maxChars);
    textarea.value = currentText;
  }

  charCount.textContent = `Character Count: ${currentText.length}/50`;

  if (currentText.length === maxChars) {
    charCount.classList.add('limit-reached');
  } else {
    charCount.classList.remove('limit-reached');
  }
});
 