let string =
  "467..114..\n...*......\n..35..633.\n......#...\n617*......\n.....+.58.\n..592.....\n......755.\n...$.*....\n.664.598..";

let lines = string.split("\n").map((elm) => [elm]);

const matrix = [];

for (i = 0; i < lines.length; i++) {
  const regex = /(\d+)/;
  let s = lines[i][0].split(regex).filter((elm) => elm);

  matrix.push(s);
}

console.log(matrix);

// "$" is not a number and not a "."
console.log(isNaN("#") && "%" !== ".");
