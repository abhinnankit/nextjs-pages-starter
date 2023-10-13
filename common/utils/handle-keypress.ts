import { KeyboardEvent } from 'react';

export const handleKeyPress = (event: KeyboardEvent, callback: () => void) => {
  if (event.key === 'Enter') {
    callback();
  }
};
