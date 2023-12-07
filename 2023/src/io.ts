import { readFileSync } from "fs";
import { join } from "path";

export function fetchInput(dir: string): string[] {
  const file = readFileSync(join(dir, "input.txt"));
  return file.toString().split("\n");
}
