import getRomanNumber from './getRomanNumber';

export default function(number, depth) {
  switch(depth % 3) {
    case 0:
      return number;
    case 1:
      return String.fromCharCode(97 + number - 1)
    case 2:
      return getRomanNumber(number)
    default:
      return number;
  }
}
