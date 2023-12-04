import fs from "fs";

const file = fs.readFileSync("input.txt", {
  encoding: "utf8",
});

const lines = file.split("\n");

const test = [
  "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
  "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
  "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
  "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
  "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
];

const colors = ["blue", "red", "green"];

const obj = {};

// .at()

for (let i = 0; i < test.length; i++) {
  obj[i + 1] = test[i].split(" ");

  let t = obj[i + 1];

  for (let j = 0; j < colors.length; j++) {
    let blue = t.reduce((acc, e, i) => {
      if (e.includes(colors[j])) {
        acc.push(colors[j], t[i - 1]);
      }
      return acc;
    }, []);
    console.log(blue);
  }
}

// testArr = test.map((line, i) => {
//     return line[]
// });
// console.log(obj);
