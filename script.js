document.getElementById('button1').addEventListener('click', () => {
  const inputText = document.getElementById('text1').value;
  document.getElementById('resultText').textContent = `Your name: ${inputText}`;
});
