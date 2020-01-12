//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
  return COLORS.indexOf(color.toLowerCase())
};

//
// Mnemonics map the colors to the numbers, that, 
// when stored as an array, happen to map to their 
// index in the array: 
// Better Be Right Or Your Great Big Values Go Wrong.
//

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
