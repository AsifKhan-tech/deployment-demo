import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 1;

app.get("/", (req, res) => {
  res.send("Hello from deployment app ");
});

app.get("/demo", (req, res) => {
  res.send("Demo of DevOps manually start!");
});

app.get("/version", (req, res) => {
  res.json({
    version: VERSION,
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    ok: true,
    service: "server is healthy ",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
