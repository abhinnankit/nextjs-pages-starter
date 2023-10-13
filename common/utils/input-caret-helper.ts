export function getCaretPosition(elem: HTMLInputElement) {
  if (elem.selectionStart || elem.selectionStart === 0) {
    return {
      start: elem.selectionStart,
      end: elem.selectionEnd,
    };
  }
  return {
    start: 0,
    end: 0,
  };
}

export function setCaretPosition(elem: HTMLInputElement, start: number, end: number) {
  if (elem.setSelectionRange) {
    elem.focus();
    elem.setSelectionRange(start, end);
  }
}
