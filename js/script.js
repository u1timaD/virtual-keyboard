const body = document.querySelector('.body');
const textArea = document.createElement('textarea');
const value = localStorage.getItem('textAreaValue');
textArea.classList = 'textarea';
textArea.cols = '60';
textArea.rows = '10';
body.prepend(textArea);
textArea.focus();
textArea.value = value;

const info = document.createElement('div');
info.classList = 'info';
const infoBox = document.createElement('p');
infoBox.classList = 'info-box';
infoBox.textContent = 'Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: левыe "ctrl" + "левый alt"';
info.prepend(infoBox);
body.prepend(info);

const keyBoardData = [
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
  { KeyQ: ['q', 'q', 'й', 'й'] },
  { KeyW: ['w', 'w', 'ц', 'ц'] },
  { KeyE: ['e', 'e', 'у', 'у'] },
  { KeyR: ['r', 'r', 'к', 'к'] },
  { KeyT: ['t', 't', 'е', 'е'] },
  { KeyY: ['y', 'y', 'н', 'н'] },
  { KeyU: ['u', 'u', 'г', 'г'] },
  { KeyI: ['i', 'i', 'ш', 'ш'] },
  { KeyO: ['o', 'o', 'щ', 'щ'] },
  { KeyP: ['p', 'p', 'з', 'з'] },
  { BracketLeft: ['[', '{', 'х', 'х'] },
  { BracketRight: [']', '}', 'ъ', 'ъ'] },
  { Backslash: ['\\', '|', '\\', '/'] },
  { Delete: ['Del', 'Del', 'Del', 'Del'] },

  { CapsLock: ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'] },
  { KeyA: ['a', 'a', 'ф', 'ф'] },
  { KeyS: ['s', 's', 'ы', 'ы'] },
  { KeyD: ['d', 'd', 'в', 'в'] },
  { KeyF: ['f', 'f', 'а', 'а'] },
  { KeyG: ['g', 'g', 'п', 'п'] },
  { KeyH: ['h', 'h', 'р', 'р'] },
  { KeyJ: ['j', 'j', 'о', 'о'] },
  { KeyK: ['k', 'k', 'л', 'л'] },
  { KeyL: ['l', 'l', 'д', 'д'] },
  { Semicolon: [';', ':', 'ж', 'ж'] },
  { Quote: ['\'', '"', 'э', 'э'] },
  { Enter: ['Enter', 'Enter', 'Enter', 'Enter'] },

  { ShiftLeft: ['Shift', 'Shift', 'Shift', 'Shift'] },
  { KeyZ: ['z', 'z', 'я', 'я'] },
  { KeyX: ['x', 'x', 'ч', 'ч'] },
  { KeyC: ['c', 'c', 'с', 'с'] },
  { KeyV: ['v', 'v', 'м', 'м'] },
  { KeyB: ['b', 'b', 'и', 'и'] },
  { KeyN: ['n', 'n', 'т', 'т'] },
  { KeyM: ['m', 'm', 'ь', 'ь'] },
  { Comma: [',', '<', 'б', 'б'] },
  { Period: ['.', '>', 'ю', 'ю'] },
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

let capsLock = 'off';
let size = 'lower';
let row = '0';
let language = 'en';

function changeToUpperCaseWord(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length <= 1) {
      words[i] = words[i].toUpperCase();
    }
  }
  return words.join(' ');
}

function changeToLowerCaseWord(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length <= 1) {
      words[i] = words[i].toLowerCase();
    }
  }
  return words.join(' ');
}

function getRenderWords(lang = 0) {
  const keyName = document.querySelectorAll('.key-name');
  for (let i = 0; i < keyBoardData.length; i += 1) {
    const word = Object.values(keyBoardData[i])[0][lang];
    const data = Object.keys(keyBoardData[i])[0];

    if (capsLock === 'off' && size === 'lower' && row === '0') {
      keyName[i].textContent = changeToLowerCaseWord(word);
      keyName[i].dataset.name = data;
    } else if (capsLock === 'on' && size === 'upper' && row === '1') {
      keyName[i].textContent = changeToUpperCaseWord(word);
      keyName[i].dataset.name = data;
    } else if (capsLock === 'off' && size === 'upper' && row === '1') {
      keyName[i].textContent = changeToUpperCaseWord(word);
      keyName[i].dataset.name = data;
    } else if (capsLock === 'on' && size === 'lower' && row === '0') {
      keyName[i].textContent = changeToLowerCaseWord(word);
      keyName[i].dataset.name = data;
    }
  }
}
getRenderWords();

const getChangeCapsLock = () => {
  if (language === 'en') {
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
  } else if (language === 'ru') {
    if (capsLock === 'off' && size === 'lower' && row === '0') {
      capsLock = 'on';
      size = 'upper';
      row = '1';
      getRenderWords(2);
    } else if (capsLock === 'on' && size === 'upper' && row === '1') {
      capsLock = 'off';
      size = 'lower';
      row = '0';
      getRenderWords(2);
    }
  }
};

const getChangeCase = () => {
  if (language === 'en') {
    if (capsLock === 'off') {
      if (size === 'lower' && row === '0') {
        size = 'upper';
        row = '1';
        getRenderWords(1);
      } else if (size === 'upper' && row === '1') {
        size = 'lower';
        row = '0';
        getRenderWords(0);
      }
    } else if (capsLock === 'on') {
      if (size === 'upper' && row === '1') {
        size = 'lower';
        row = '0';
        getRenderWords(1);
      } else if (size === 'lower' && row === '0') {
        size = 'upper';
        row = '1';
        getRenderWords(0);
      }
    }
  } else if (language === 'ru') {
    if (capsLock === 'off') {
      if (size === 'lower' && row === '0') {
        size = 'upper';
        row = '1';
        getRenderWords(3);
      } else if (size === 'upper' && row === '1') {
        size = 'lower';
        row = '0';
        getRenderWords(2);
      }
    } else if (capsLock === 'on') {
      if (size === 'upper' && row === '1') {
        size = 'lower';
        row = '0';
        getRenderWords(3);
      } else if (size === 'lower' && row === '0') {
        size = 'upper';
        row = '1';
        getRenderWords(2);
      }
    }
  }
};

const getChangeLanguage = () => {
  if (capsLock === 'off' && language === 'en') {
    getRenderWords(2);
    language = 'ru';
  } else if (capsLock === 'off' && language === 'ru') {
    getRenderWords();
    language = 'en';
  } if (capsLock === 'on' && language === 'en') {
    getRenderWords(2);
    language = 'ru';
  } else if (capsLock === 'on' && language === 'ru') {
    getRenderWords();
    language = 'en';
  }
};

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
    textArea.focus();
  } else if (key === 'ShiftLeft' || key === 'ShiftRight') {
    textArea.focus();
    getChangeCase();
  } else if (key === 'CapsLock') {
    getChangeCapsLock();
  } else {
    textArea.setRangeText(button, start, end, 'end');
    textArea.focus();
  }
  localStorage.setItem('textAreaValue', textArea.value);
}

function pressOffButton(evt) {
  const key = evt.code;
  if (key === 'ShiftLeft' || key === 'ShiftRight') {
    getChangeCase();
  }
}

textArea.addEventListener('keydown', pressOnButton);
textArea.addEventListener('keyup', pressOffButton);

function buttonClick(evt) {
  const parentClass = evt.target.className;
  if (parentClass === 'key-line' || parentClass === 'key-board') {
    textArea.focus();
  } else {
    const point = evt.target.textContent;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const buttonColor = evt.target.style;
    buttonColor.backgroundColor = 'green';

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
      textArea.focus();
    } else if (point === 'CapsLock') {
      getChangeCapsLock();
    } else {
      textArea.setRangeText(point, start, end, 'end');
      textArea.focus();
    }
    localStorage.setItem('textAreaValue', textArea.value);
  }
}

function buttonOnClick(evt) {
  const parentClass = evt.target.className;
  if (parentClass === 'key-line' || parentClass === 'key-board') {
    textArea.focus();
  } else {
    const point = evt.target.textContent;
    const buttonColorDefault = evt.target.style;
    buttonColorDefault.backgroundColor = 'rebeccapurple';

    if (['Backspace', 'Tab', 'Del', 'Enter', 'Shift', 'Alt', 'Ctrl', ' ', 'Win'].includes(point)) {
      textArea.focus();
    } else {
      textArea.focus();
    }
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

function runOnKeys(...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    for (let i = 0; i < codes.length; i += 1) {
      const code = codes[i];
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    getChangeLanguage();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

runOnKeys(
  'ControlLeft',
  'AltLeft',
);
