import path from "path";
import { Request, Response } from "express";
import express from "express";
const app = express();
const port = 8080;

app
  .get("/client-bundle.js", (req: Request, res: Response) => {
    const bundlePath = path.join(__dirname, "../dist/client-bundle.js");
    console.log(`Client bundle will be served from: ${bundlePath}`);
    res.sendFile(bundlePath);
  })
  .listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
