const body = document.querySelector('.body');
const textArea = document.createElement('textarea');
textArea.classList = 'textarea';
textArea.cols = '40';
textArea.rows = '10';
body.prepend(textArea);
textArea.focus();

const en = [
  { Backquote: ['`', '~', 'ё', 'Ё'] },
  { Digit1: ['1', '!', '1', '!'] },
  { Digit2: ['2', '@', '2', '"'] },
  { Digit3: ['3', '#', '3', '№'] },
  { Digit4: ['4', '$', '4', ';'] },
  { Digit5: ['5', '%', '5', '%'] },
  { Digit6: ['6', '^', '6', ':'] },
  { Digit7: ['7', '&', '7', '?'] },
  { Digit8: ['8', '*', '8', '*'] },
  { Digit9: ['9', '(', '9', '('] },
  { Digit0: ['0', ')', '0', ')'] },
  { Minus: ['-', '_', '-', '_'] },
  { Equal: ['=', '+', '=', '+'] },
  { Backspace: ['Backspace', 'Backspace', 'Backspace', 'Backspace'] },

  { Tab: ['Tab', 'Tab', 'Tab', 'Tab'] },
  { KeyQ: ['q', 'Q', 'й', 'Й'] },
  { KeyW: ['w', 'W', 'ц', 'Ц'] },
  { KeyE: ['e', 'E', 'у', 'У'] },
  { KeyR: ['r', 'R', 'к', 'К'] },
  { KeyT: ['t', 'T', 'е', 'Е'] },
  { KeyY: ['y', 'Y', 'н', 'Н'] },
  { KeyU: ['u', 'U', 'г', 'Г'] },
  { KeyI: ['i', 'I', 'ш', 'Ш'] },
  { KeyO: ['o', 'O', 'щ', 'Щ'] },
  { KeyP: ['p', 'P', 'з', 'З'] },
  { BracketLeft: ['[', '{', 'х', 'Х'] },
  { BracketRight: [']', '}', 'ъ', 'Ъ'] },
  { Backslash: ['\\', '|', '\\', '/'] },
  { Delete: ['Del', 'Del', 'Del', 'Del'] },

  { CapsLock: ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'] },
  { KeyA: ['a', 'A', 'ф', 'Ф'] },
  { KeyS: ['s', 'S', 'ы', 'Ы'] },
  { KeyD: ['d', 'D', 'в', 'В'] },
  { KeyF: ['f', 'F', 'а', 'А'] },
  { KeyG: ['g', 'G', 'п', 'П'] },
  { KeyH: ['h', 'H', 'р', 'Р'] },
  { KeyJ: ['j', 'J', 'о', 'О'] },
  { KeyK: ['k', 'K', 'л', 'Л'] },
  { KeyL: ['l', 'L', 'д', 'Д'] },
  { Semicolon: [';', ':', 'ж', 'Ж'] },
  { Quote: ['\'', '"', 'э', 'Э'] },
  { Enter: ['Enter', 'Enter', 'Enter', 'Enter'] },

  { ShiftLeft: ['Shift', 'Shift', 'Shift', 'Shift'] },
  { KeyZ: ['z', 'Z', 'я', 'Я'] },
  { KeyX: ['x', 'X', 'ч', 'Ч'] },
  { KeyC: ['c', 'C', 'с', 'С'] },
  { KeyV: ['v', 'V', 'м', 'М'] },
  { KeyB: ['b', 'B', 'и', 'и'] },
  { KeyN: ['n', 'N', 'т', 'Т'] },
  { KeyM: ['m', 'M', 'ь', 'ь'] },
  { Comma: [',', '<', 'б', 'Б'] },
  { Period: ['.', '>', 'ю', 'Ю'] },
  { Slash: ['/', '?', '.', ','] },
  { ArrowUp: ['\u25B2', '\u25B2', '\u25B2', '\u25B2'] },
  { ShiftRight: ['Shift', 'Shift', 'Shift', 'Shift'] },

  { ControlLeft: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'] },
  { MetaLeft: ['Win', 'Win', 'Win', 'Win'] },
  { AltLeft: ['Alt', 'Alt', 'Alt', 'Alt'] },
  { Space: [' ', ' ', ' ', ' '] },
  { AltRight: ['Alt', 'Alt', 'Alt', 'Alt'] },
  { ArrowLeft: ['\u25C2', '\u25C2', '\u25C2', '\u25C2'] },
  { ArrowDown: ['\u25BE', '\u25BE', '\u25BE', '\u25BE'] },
  { ArrowRight: ['\u25B8', '\u25B8', '\u25B8', '\u25B8'] },
  { ControlRight: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'] },
];

const getCreatKeyBoard = function () {
  const keyBoard = document.createElement('section');
  keyBoard.classList = 'key-board';

  // Разбить это на несколько функций
  for (let i = 0; i < 5; i += 1) {
    const keyLine = document.createElement('div');
    keyLine.classList = 'key-line';
    keyLine.dataset.line = i;
    if (i === 0) {
      for (let j = 0; j < 14; j += 1) {
        const keyButton = document.createElement('div');
        keyButton.classList = 'key-button';
        keyButton.dataset.buttonName = j;
        const keyName = document.createElement('span');
        keyName.classList = 'key-name';
        keyLine.append(keyButton);
        keyButton.append(keyName);
      }
    } else if (i === 1) {
      for (let j = 0; j < 15; j += 1) {
        const keyButton = document.createElement('div');
        keyButton.classList = 'key-button';
        keyButton.dataset.buttonName = j;
        const keyName = document.createElement('span');
        keyName.classList = 'key-name';
        keyLine.append(keyButton);
        keyButton.append(keyName);
      }
    } else if (i === 2) {
      for (let j = 0; j < 13; j += 1) {
        const keyButton = document.createElement('div');
        keyButton.classList = 'key-button';
        keyButton.dataset.buttonName = j;
        const keyName = document.createElement('span');
        keyName.classList = 'key-name';
        keyLine.append(keyButton);
        keyButton.append(keyName);
      }
    } else if (i === 3) {
      for (let j = 0; j < 13; j += 1) {
        const keyButton = document.createElement('div');
        keyButton.classList = 'key-button';
        keyButton.dataset.buttonName = j;
        const keyName = document.createElement('span');
        keyName.classList = 'key-name';
        keyLine.append(keyButton);
        keyButton.append(keyName);
      }
    } else {
      for (let j = 0; j < 9; j += 1) {
        const keyButton = document.createElement('div');
        keyButton.classList = 'key-button';
        keyButton.dataset.buttonName = j;
        const keyName = document.createElement('span');
        keyName.classList = 'key-name';
        keyLine.append(keyButton);
        keyButton.append(keyName);
      }
    }
    keyBoard.append(keyLine);
  }
  return keyBoard;
};

// Отрисовываем клавиатуру
textArea.insertAdjacentElement('afterend', getCreatKeyBoard());

// let capsLock = 'small';
// let language = 'en';
// let shift = 'off';
// let upperCase;

let capsLock = 'off';
let size = 'lower';
let row = '0';

// отрисосвываем буквы на клавиатуру
// Создать кнопку через Class и добавить ей те или иные свойства
function getRenderWords(lang = 0) {
  const keyName = document.querySelectorAll('.key-name');
  for (let i = 0; i < en.length; i += 1) {
    const word = Object.values(en[i])[0][lang];

    if (capsLock === 'off' && size === 'lower' && row === '0') {
      console.log('Маленькие');
      keyName[i].textContent = word.charAt(0).toLowerCase() + word.slice(1);
      keyName[i].dataset.name = Object.keys(en[i])[0];
    } else if (capsLock === 'on' && size === 'upper' && row === '1') {
      console.log('большие');
      keyName[i].textContent = word.charAt(0).toUpperCase() + word.slice(1);
      keyName[i].dataset.name = Object.keys(en[i])[0];
    } else if (capsLock === 'off' && size === 'upper' && row === '1') {
      console.log('Ббольшие без капса');
      keyName[i].textContent = word.charAt(0).toUpperCase() + word.slice(1);
      keyName[i].dataset.name = Object.keys(en[i])[0];
    } else if (capsLock === 'on' && size === 'lower' && row === '0') {
      keyName[i].textContent = word.charAt(0).toLowerCase() + word.slice(1);
      keyName[i].dataset.name = Object.keys(en[i])[0];
    }
  }
}
getRenderWords();

const getChangeCapsLock = () => {
  if (capsLock === 'off' && size === 'lower' && row === '0') {
    capsLock = 'on';
    size = 'upper';
    row = '1';
    getRenderWords(0);
  } else if (capsLock === 'on' && size === 'upper' && row === '1') {
    capsLock = 'off';
    size = 'lower';
    row = '0';
    getRenderWords(0);
  }
};

const getChangeCase = () => {
  if (capsLock === 'off' && size === 'lower' && row === '0') {
    size = 'upper';
    row = '1';
    getRenderWords(1);
  } else if (capsLock === 'off' && size === 'upper' && row === '1') {
    size = 'lower';
    row = '0';
    getRenderWords(0);
  } else if (capsLock === 'on' && size === 'upper' && row === '1') {
    size = 'lower';
    row = '0';
    getRenderWords(1);
  } else if (capsLock === 'on' && size === 'lower' && row === '0') {
    size = 'upper';
    row = '1';
    getRenderWords(0);
  }
};

function getChangeLanguage() {
  if (capsLock === 'small' && language === 'en') {
    getRenderWords(2);
    language = 'ru';
  } else if (capsLock === 'small' && language === 'ru') {
    getRenderWords();
    language = 'en';
  } else if (capsLock === 'big' && language === 'en') {
    getRenderWords(2);
    language = 'ru';
  } else if (capsLock === 'big' && language === 'ru') {
    getRenderWords();
    language = 'en';
  }
}

function buttonClick(evt) {
  const point = evt.target.textContent;
  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;

  if (point === 'Backspace') {
    if (start === end) {
      textArea.setRangeText('', start - 1, end, 'end');
    } else {
      textArea.setRangeText('', start, end, 'select');
    }
  } else if (point === 'Tab') {
    textArea.setRangeText('   ', start, end, 'end');
  } else if (point === 'Del') {
    textArea.setRangeText('', start, end + 1, 'end');
  } else if (point === 'Enter') {
    textArea.setRangeText('\n', start, end, 'end');
  } else if (['Shift', 'Alt', 'Ctrl', 'Win'].includes((point))) {
  } else if (point === 'CapsLock') {
    getChangeCapsLock();
  } else {
    evt.target.style.backgroundColor = 'green';
    textArea.setRangeText(point, start, end, 'end');
    textArea.focus();
  }
}

function ColorOfButtonOn(evt) {
  const key = evt.code;
  const button = document.querySelector(`[data-name="${key}"]`);
  button.style.backgroundColor = 'white';
}

function ColorOfButtonOff(evt) {
  const key = evt.code;
  const button = document.querySelector(`[data-name="${key}"]`);
  button.style.backgroundColor = '';
}

window.addEventListener('keydown', (evt) => {
  textArea.focus();
  ColorOfButtonOn(evt);
});

window.addEventListener('keyup', (evt) => {
  textArea.focus();
  ColorOfButtonOff(evt);
});

// ВВОД С КЛАВИАТУРЫ

function pressOnButton(evt) {
  evt.preventDefault();
  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;
  const key = evt.code;
  const button = document.querySelector(`[data-name="${key}"]`).textContent;

  if (key === 'Backspace') {
    if (start === end) {
      textArea.setRangeText('', start - 1, end, 'end');
    } else {
      textArea.setRangeText('', start, end, 'select');
    }
  } else if (key === 'Tab') {
    textArea.setRangeText('   ', start, end, 'end');
  } else if (key === 'Delete') {
    textArea.setRangeText('', start, end + 1, 'end');
  } else if (key === 'Enter') {
    textArea.setRangeText('\n', start, end, 'end');
  } else if (['AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'MetaLeft'].includes((key))) {
  } else if (key === 'ShiftLeft' || key === 'ShiftRight') {
    console.log('Сработало нажатие');
    getChangeCase();
  } else if (key === 'CapsLock') {
    getChangeForCapsLock();
  } else {
    textArea.setRangeText(button, start, end, 'end');
    textArea.focus();
  }
}

function pressOffButton(evt) {
  const key = evt.code;
  if (key === 'ShiftLeft' || key === 'ShiftRight') {
    console.log('Сработало отжатие');
    getChangeCase();
  }
}

textArea.addEventListener('keydown', pressOnButton);
textArea.addEventListener('keyup', pressOffButton);

function buttonOnClick(evt) {
  const point = evt.target.textContent;

  if (['Backspace', 'Tab', 'Del', 'Enter', 'Shift', 'Alt', 'Ctrl', ' ', 'Win'].includes(point)) {
    textArea.focus();
  } else {
    evt.target.style.backgroundColor = 'rebeccapurple';
  }
}

const keyBoard = document.querySelector('.key-board');
keyBoard.addEventListener('mousedown', buttonClick);
keyBoard.addEventListener('mouseup', buttonOnClick);

function getShiftClick() {
  getChangeCase();
}

const keyLine = document.querySelector('[data-line="3"]');
const shiftButtonFirst = keyLine.querySelector('[data-button-name="0"]');
const shiftButtonLast = keyLine.querySelector('[data-button-name="12"]');

shiftButtonFirst.addEventListener('mousedown', getShiftClick);
shiftButtonFirst.addEventListener('mouseup', getShiftClick);
shiftButtonLast.addEventListener('mousedown', getShiftClick);
shiftButtonLast.addEventListener('mouseup', getShiftClick);
