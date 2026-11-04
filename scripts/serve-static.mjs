import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";

const root = path.resolve(process.argv[2] || "hostinger-dist");
const port = Number(process.argv[3] || 4173);
const types = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
]);

createServer((request, response) => {
  const requestPath = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const candidate = path.resolve(root, `.${requestPath}`);
  const safeCandidate = candidate.startsWith(root) ? candidate : root;
  const file = existsSync(safeCandidate) && statSync(safeCandidate).isFile()
    ? safeCandidate
    : path.join(root, "index.html");

  response.setHeader("Content-Type", types.get(path.extname(file)) || "application/octet-stream");
  createReadStream(file).pipe(response);
}).listen(port, "127.0.0.1", () => {
  process.stdout.write(`Serving ${root} at http://127.0.0.1:${port}\n`);
});
