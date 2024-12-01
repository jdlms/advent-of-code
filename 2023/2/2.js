import fs from "fs";

const file = fs.readFileSync("input.txt", {
  encoding: "utf8",
});
const lines = file.split("\n");

const cubes = { blue: 14, red: 12, green: 13 };

let puzzleOne = 0;
let puzzleTwo = 0;

for (let i = 0; i < lines.length; i++) {
  let highest = [0, 0, 0];

  let colon = lines[i].indexOf(":");
  let s = lines[i].substring(colon + 1).split(" ");

  let one = s.filter((elm, idx) => {
    let n = !isNaN(elm);
    return (
      (n &&
        s[idx + 1].includes("blue") &&
        elm > cubes.blue) ||
      (n &&
        s[idx + 1].includes("red") &&
        elm > cubes.red) ||
      (n &&
        s[idx + 1].includes("green") &&
        elm > cubes.green)
    );
  });

  for (let j = 0; j < s.length; j++) {
    let n = !isNaN(s[j]);
    if (
      n &&
      s[j + 1].includes("blue") &&
      s[j] > highest[0]
    ) {
      highest[0] = Number(s[j]);
    }
    if (
      n &&
      s[j + 1].includes("red") &&
      s[j] > highest[1]
    ) {
      highest[1] = Number(s[j]);
    }
    if (
      n &&
      s[j + 1].includes("green") &&
      s[j] > highest[2]
    ) {
      highest[2] = Number(s[j]);
    }
  }

  let multiplied = highest.reduce((acc, c) => {
    return acc * c;
  }, 1);

  puzzleTwo += multiplied;
  puzzleOne += i + 1;
}

// answers
console.log(puzzleOne);
console.log(puzzleTwo);

// I missread the prompt and spent a couple hours writing the nonsense below for my own problem: adding the amounts of each color together and
// checking it against the given number of cubes

// const file = fs.readFileSync("input.txt", {
//   encoding: "utf8",
// });

// const lines = file.split("\n");

// const test = [
//   "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
//   "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
//   "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
//   "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
//   "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
// ];

// const colors = ["blue", "red", "green"];

// const obj = {};

// let answer = [];

// for (let i = 0; i < test.length; i++) {
//   obj[i + 1] = test[i].split(" ");

//   let collection = {};
//   let t = obj[i + 1];

//   for (let j = 0; j < colors.length; j++) {
//     let colorCount = t.reduce((acc, e, i) => {
//       if (e.includes(colors[j])) {
//         if (colors[j] === "blue") {
//           if (!acc.blue) acc.blue = 0;
//           acc.blue += Number(t[i - 1]);
//         }
//         if (colors[j] === "red") {
//           if (!acc.red) acc.red = 0;
//           acc.red += Number(t[i - 1]);
//         }
//         if (colors[j] === "green") {
//           if (!acc.green) acc.green = 0;
//           acc.green += Number(t[i - 1]);
//         }
//       }
//       collection = { ...collection, ...acc };
//       return acc;
//     }, collection);
//   }
//   answer[i] = { ...collection };
// }

// // 12 red cubes, 13 green cubes, and 14 blue cubes
// const cubes = { blue: 14, red: 12, green: 13 };

// const a = answer.reduce((acc, elm, i) => {
//   if (
//     elm.blue <= cubes.blue &&
//     elm.red <= cubes.red &&
//     elm.green <= cubes.green
//   ) {
//     acc += i + 1;
//   }
//   return acc;
// }, 0);
// console.log(answer);
// console.log(a);
