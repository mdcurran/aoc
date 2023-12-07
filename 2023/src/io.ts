import { join } from "path";

export async function fetchInput(dir: string): Promise<string[]> {
  const file = Bun.file(join(dir, "input.txt"));
  return (await file.text()).split("\n");
}
