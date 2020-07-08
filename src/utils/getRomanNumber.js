export default function(number) {
  let roman = "";
  // NOTE: I doubt we will have lists longer than 50, so just keep it simplier now
  const romanNumList = {
      l: 50,
      xv: 40,
      x: 10,
      ix: 9,
      v: 5,
      iv: 4,
      i: 1
  };

  for (let key in romanNumList) {
      const a = Math.floor(number / romanNumList[key]);
      if (a >= 0) {
          for (let i = 0; i < a; i++) {
              roman += key;
          }
      }
      number = number % romanNumList[key];
  }

  return roman;
}
