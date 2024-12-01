import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split("\n");

  const bigArr = [];

  for (let i = 0; i < lines.length; i++) {
    const arr = lines[i].split("");
    const arrReversed = arr.reverse();

    
  }
});

// splice, split, slice
