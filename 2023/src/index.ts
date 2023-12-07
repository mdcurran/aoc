import { existsSync } from "node:fs";
import path from "node:path";

function run(day: string) {
  const directory = path.join("src", "days", day);
  const filepath = path.join(directory, "index.ts");

  if (!existsSync(directory)) {
    throw new Error(`directory src/days/${day} does not exist`);
  }

  if (!existsSync(filepath)) {
    throw new Error(`source file ${filepath} does not exists`);
  }

  const child = Bun.spawnSync(["bun", "run", filepath]);
  console.log(child.stdout.toString());
}

run(Bun.argv[2]);
