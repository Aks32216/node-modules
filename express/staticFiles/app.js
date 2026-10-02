import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "uploads")));

app.get("/files/:name", (req, res, next) => {
  // this will serve any file defined
  const fileName = path.join(__dirname, "public", req.params.name);

  res.sendFile(fileName, (err) => {
    if (err) {
      next(err);
    }
  });
});

app.get("/download/:name", (req, res, next) => {
  // this will download file from browser when requested for
  const fileName = path.join(__dirname, "public", req.params.name);

  res.download(fileName, (err) => {
    if (err) {
      next(err);
    }
  });
});

app.get("restrict/files/:name", (req, res, next) => {
  // this will serve files if only present in root and not in any location
  const fileName = req.params.fileName;
  res.sendFile(fileName, { root: path.join(__dirname, "public") }, (err) => {
    if (err) {
      next(err);
    }
  });
});

app.use((err, req, res, next) => {
  console.log("Inside global error handler");
  console.log(err);
  res.status(400).send({ message: "bad request data" });
});

app.listen(6000, () => {
  console.log("Server listening on port 5000");
});
