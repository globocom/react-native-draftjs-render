/**
 * Source: https://github.com/globocom/react-native-draftjs-render/blob/master/src/utils/generateKey.js
 */

function s4(): string {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

export default function generateKey(): string {
  return `${s4()}${s4()}-${s4()}-${s4()}${s4()}-${s4()}${s4()}-${s4()}${s4()}${s4()}`;
}
