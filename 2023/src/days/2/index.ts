import { fetchInput } from "../../io";

const regexp = /(\d+)\s+(\w+)/g;

function first(input: string[]): number {
  let sum = 0;

  input.forEach(function(line: string, i: number) {
    if (line == "") {
      return;
    }

    let valid = true;
    for (const draw of line.matchAll(regexp)) {
      if (draw[2] == "red" && Number(draw[1]) > 12) {
        valid = false;
        break;
      }
      if (draw[2] == "green" && Number(draw[1]) > 13) {
        valid = false;
        break;
      }
      if (draw[2] == "blue" && Number(draw[1]) > 14) {
        valid = false;
        break;
      }
    }

    if (valid) {
      sum += i+1;
    }
  });

  return sum;
}

function second(input: string[]): number {
  let powers = 0;

  input.forEach(function(line: string) {
    if (line == "") {
      return;
    }

    let red = 0;
    let green = 0;
    let blue = 0;

    for (const draw of line.matchAll(regexp)) {
      if (draw[2] == "red" && Number(draw[1]) > red) {
        red = Number(draw[1]);
        continue;
      }
      if (draw[2] == "green" && Number(draw[1]) > green) {
        green = Number(draw[1]);
        continue;
      }
      if (draw[2] == "blue" && Number(draw[1]) > blue) {
        blue = Number(draw[1]);
        continue;
      }
    }

    powers += (red * green * blue);
  });

  return powers;
}

const input = await fetchInput(import.meta.dir);

console.log(`first: ${first(input)}`);
console.log(`second: ${second(input)}`);
