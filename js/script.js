import { keyBoardData, body } from './data.js';
import { changeToUpperCaseWord, changeToLowerCaseWord } from './util.js';

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

const getCreatKeyBoard = () => {
  const keyBoard = document.createElement('section');
  keyBoard.classList = 'key-board';

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

textArea.insertAdjacentElement('afterend', getCreatKeyBoard());

const lang = localStorage.getItem('lang');

let capsLock = 'off';
let size = 'lower';
let row = '0';
let language = lang;

function getRenderWords(item = 0) {
  const keyName = document.querySelectorAll('.key-name');
  for (let i = 0; i < keyBoardData.length; i += 1) {
    const word = Object.values(keyBoardData[i])[0][item];
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

if (language === 'ru') {
  getRenderWords(2);
} else if (language === 'en') {
  getRenderWords();
}

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
    localStorage.setItem('lang', 'ru');
  } else if (capsLock === 'off' && language === 'ru') {
    getRenderWords();
    language = 'en';
    localStorage.setItem('lang', 'en');
  } if (capsLock === 'on' && language === 'en') {
    getRenderWords(2);
    language = 'ru';
    localStorage.setItem('lang', 'ru');
  } else if (capsLock === 'on' && language === 'ru') {
    getRenderWords();
    language = 'en';
    localStorage.setItem('lang', 'en');
  }
};

function ColorOfButtonOn(evt) {
  const key = evt.code;
  const button = document.querySelector(`[data-name="${key}"]`);
  button.style.backgroundColor = 'red';
  button.style.transform = 'scale(0.8)';
}

function ColorOfButtonOff(evt) {
  const key = evt.code;
  const button = document.querySelector(`[data-name="${key}"]`);
  button.style.backgroundColor = '';
  button.style.transform = '';
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
    const button = evt.target.style;
    button.backgroundColor = 'green';
    button.transform = 'scale(0.8)';

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
    const button = evt.target.style;
    button.backgroundColor = 'rebeccapurple';
    button.transform = '';

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
