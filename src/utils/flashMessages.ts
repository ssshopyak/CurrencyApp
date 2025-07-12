import {showMessage} from 'react-native-flash-message';

export function showError(text: string) {
  showMessage({
    message: text,
    type: 'danger',
    icon: {icon: 'danger', position: 'right', props: {}},
  });
}

export function showSuccess(text: string) {
  showMessage({
    message: text,
    type: 'success',
    icon: {icon: 'success', position: 'right', props: {}},
  });
}
