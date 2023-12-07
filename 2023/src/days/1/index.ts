import { fetchInput } from "../../io";

function first(input: string[]): number {
  let total = 0;
  for (const line of input) {
    if (line === "") {
      continue;
    }

    let current = "";
    for (let i = 0; current.length < 1; i++) {
      if (isNumber(line[i])) {
        current += line[i];
      }
    }

    for (let j = input.length - 1; current.length < 2; j--) {
      if (isNumber(line[j])) {
        current += line[j];
      }
    }

    total += Number(current);
  }

    return total;
}

function second(input: string[]): number {
  const replacements = new Map<string,string>([
    ["one", "o1e"],
    ["two", "t2o"],
    ["three", "t3e"],
    ["four", "f4r"],
    ["five", "f5e"],
    ["six", "s6x"],
    ["seven", "s7n"],
    ["eight", "e8t"],
    ["nine", "n9e"],
  ]);

  for (let i = 0; i < input.length; i++) {
    for (const [k, v] of replacements) {
      input[i] = input[i].replaceAll(k, v);
    }
  }

  return first(input);
}

function isNumber(c: string): boolean {
  return c >= "0" && c <= "9";
}

const input = fetchInput(import.meta.dir);

console.log(`first: ${first(input)}`);
console.log(`second: ${second(input)}`);
