import { join } from "path";

function first(contents: string[]): number {
  let total = 0;
  for (const line of contents) {
    if (line === "") {
      continue;
    }

    let current = "";
    for (let i = 0; current.length < 1; i++) {
      if (isNumber(line[i])) {
        current += line[i];
      }
    }

    for (let j = contents.length - 1; current.length < 2; j--) {
      if (isNumber(line[j])) {
        current += line[j];
      }
    }

    total += Number(current);
    current = "";
  }

    return total;
}

function second(contents: string[]): number {
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

  for (let i = 0; i < contents.length; i++) {
    for (const [k, v] of replacements) {
      contents[i] = contents[i].replaceAll(k, v);
    }
  }

  return first(contents);
}

function isNumber(c: string): boolean {
  return c >= "0" && c <= "9";
}

const file = Bun.file(join(import.meta.dir, "input.txt"));
const contents = (await file.text()).split("\n");

console.log(`first: ${first(contents)}`);
console.log(`second: ${second(contents)}`);
