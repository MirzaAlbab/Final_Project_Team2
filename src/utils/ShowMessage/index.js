import {showMessage} from 'react-native-flash-message';
// import {colors} from '../colors';
import {COLORS} from '../colors';

export function showError(message) {
  showMessage({
    message,
    type: 'danger',
    color: COLORS.white,
    icon: 'danger',
  });
}

export function showSuccess(message) {
  showMessage({
    message,
    type: 'success',
    color: COLORS.white,
    icon: 'success',
  });
}

export function showInfo(message) {
  showMessage({
    message,
    type: 'info',
    color: COLORS.white,
    icon: 'info',
  });
}
