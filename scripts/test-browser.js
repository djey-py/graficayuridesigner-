// The npm-packaged browser keeps tests runnable when the Playwright CDN is unavailable.
import chromium from "@sparticuz/chromium";
import { readFileSync, mkdirSync, existsSync, writeFileSync } from "node:fs";
import { brotliDecompressSync } from "node:zlib";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
export async function browserOptions() {
  const executablePath =
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ||
    (await chromium.executablePath());
  const env = { ...process.env };
  if (
    process.platform === "linux" &&
    process.arch === "x64" &&
    !process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
  ) {
    const directory = join(tmpdir(), "yuri-chromium-libs");
    if (!existsSync(join(directory, "lib/libnspr4.so"))) {
      mkdirSync(directory, { recursive: true });
      const archive = join(directory, "libraries.tar");
      const packageEntry = require.resolve("@sparticuz/chromium");
      const source = join(packageEntry, "../../bin/al2023.tar.br");
      writeFileSync(archive, brotliDecompressSync(readFileSync(source)));
      execFileSync("tar", ["xf", archive, "-C", directory]);
    }
    env.LD_LIBRARY_PATH = `${join(directory, "lib")}:${env.LD_LIBRARY_PATH || ""}`;
  }
  return { executablePath, args: chromium.args, env };
}
