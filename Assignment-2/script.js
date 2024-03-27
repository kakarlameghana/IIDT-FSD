const colorDisplay = document.getElementById('color-display');
const colorBtn = document.getElementById('color-btn');
const colorBox = document.getElementsByTagName('body')[0];
const btn = document.getElementById('color-btn')

const colors = [
  '#FF5733',
  '#FFBD33',
  '#33FF57',
  '#3366FF',
  '#CB33FF',
  '#FF33DD',
  '#FF3333',
  '#33FFBD',
  '#33CBFF',
  '#6A33FF'
];

colorBtn.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = randomColor;
  btn.style.backgroundColor = randomColor;
  colorDisplay.textContent = randomColor;
});
