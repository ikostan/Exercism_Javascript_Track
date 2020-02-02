//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  let total = '';

  for (let i = 0; i < colors.length && i < 2; i++){
    total = total + COLORS.indexOf(colors[i].toLowerCase()).toString();
  };

  return Number(total);
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"];
