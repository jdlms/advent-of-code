import fs from "fs";

const file = fs.readFileSync("input.txt", {
  encoding: "utf8",
});

const test =
  "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53\nCard 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19\nCard 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1\nCard 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83\nCard 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36\nCard 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11";

const lines = file.split("\n");

// remove card number and colon
const allNums = lines.map((elm, i) => {
  let colon = elm.indexOf(":") + 2;
  return elm
    .substring(colon)
    .split(" ")
    .filter((e) => e !== "")
    .map((e) => parseInt(e));
});
let totalCount = [];

// loop through each line
for (let i = 0; i < allNums.length; i++) {
  let matches = [];
  let line = allNums[i];

  //break into 2 arrays
  let ten = line.slice(0, 10);
  let twentyFive = line.slice(11, 36);

  //check for matches
  ten.forEach((elm) => {
    if (!twentyFive.includes(elm)) {
      return;
    } else {
      matches.push(1);
    }
    return;
  });

  if (matches.length > 0) {
    let score = 1;
    for (let i = 1; i < matches.length; i++) {
      score *= 2;
    }
    totalCount.push(score);
  }
}

console.log(totalCount.reduce((acc, curr) => acc + curr));
