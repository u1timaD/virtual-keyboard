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
