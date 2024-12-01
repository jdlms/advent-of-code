const data = await Deno.readTextFile("input.txt");

const lines = data.split("\n");
console.log(lines);