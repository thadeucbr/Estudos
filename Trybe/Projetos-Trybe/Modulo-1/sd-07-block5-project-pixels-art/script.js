// Define nossa cor padrão para pintar o quadro
let color = 'black';
// Gera a cor do botão
// Fonte: https://stackoverflow.com/a/25873123
const randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
// <------------------------------------------------------->

// Adiciona cada cor ao valor do botão
const buttonColor1 = randomHsl();
const buttonColor2 = randomHsl();
const buttonColor3 = randomHsl();
// Define o fundo de cada botão com a cor gerada a cima
document.querySelector('.button1').style.backgroundColor = buttonColor1;
document.querySelector('.button2').style.backgroundColor = buttonColor2;
document.querySelector('.button3').style.backgroundColor = buttonColor3;
// Remove a classe selected de cada botão
const resetSelector = () => {
  document.querySelectorAll('.color').forEach((item) => {
    item.classList.remove('selected');
  });
};
// Bloco que cria os seletores de cores
const blackPicker = document.querySelector('.black');
blackPicker.addEventListener('click', function () {
  color = 'black';
  resetSelector();
  document.querySelector('.black').classList.add('selected');
});

const colorOne = document.querySelector('.button1');
colorOne.addEventListener('click', function () {
  color = buttonColor1;
  resetSelector();
  document.querySelector('.button1').classList.add('selected');
});

const colorTwo = document.querySelector('.button2');
colorTwo.addEventListener('click', function () {
  color = buttonColor2;
  resetSelector();
  document.querySelector('.button2').classList.add('selected');
});

const colorThree = document.querySelector('.button3');
colorThree.addEventListener('click', function () {
  color = buttonColor3;
  resetSelector();
  document.querySelector('.button3').classList.add('selected');
});

// Função que permite que pinte o fundo de cada quadrado com a cor selecionada
// https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
function colorSelector() {
  document.querySelectorAll('.pixel').forEach((item) => {
    item.addEventListener('click', () => {
      item.style.backgroundColor = color;
    });
  });
}
// Chamando a função
colorSelector();
// <-------------------------------------------------------------------------------->
// Função que limpa a cor do quadro
const clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', () => {
  for (
    let index = 0;
    index < document.querySelectorAll('.pixel').length;
    index += 1
  ) {
    document.querySelectorAll('.pixel')[index].style.backgroundColor = 'white';
  }
});
// Capturando o valor do tamanho do nosso quadro
let boardSizeNumber;
const boardSize = document.querySelector('#board-size');
boardSize.addEventListener('keyup', () => {
  boardSizeNumber = document.querySelector('#board-size').value;
  boardSizeNumber *= boardSizeNumber;
});
// Função que deleta os quadrados do nosso quadro
function resetBoard() {
  document.querySelectorAll('.col').forEach(function (a) {
    a.remove();
  });
  document.querySelectorAll('.pixel').forEach((item) => {
    item.remove();
  });
}
// Função que cria um novo quadro com os parametros passados
const generateBoard = document.querySelector('#generate-board');
generateBoard.addEventListener('click', function () {
  if (boardSize.value <= 0) {
    return alert('Board inválido!');
  }
  if (boardSize.value < 5) {
    boardSizeNumber = 5 * 5;
  }
  if (boardSize.value > 50) {
    boardSizeNumber = 50 * 50;
  }
  const targetDiv = document.getElementById('pixel-board');
  let count = 0;
  resetBoard();
  for (let index = 0; index < boardSizeNumber; index += 1) {
    const newPixel = document.createElement('div');
    newPixel.className = 'pixel';
    targetDiv.appendChild(newPixel);
    count += 1;
    if (count === Math.sqrt(boardSizeNumber)) {
      const spacer = document.createElement('div');
      spacer.className = 'col';
      targetDiv.appendChild(spacer);
      count = 0;
    }
  }
  return colorSelector();
});
