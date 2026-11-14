import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "^1.1";

app.get("/", (req, res) => {
  res.send("Hello from deployment app v2.1 ");
});

app.get("/deploy", (req, res) => {
  res.send(
    "CI / CD is working fine. Fix the Node.js version issue using checkout@v5",
  );
});

app.get("/actions", (req, res) => {
  res.json({
    status: "We are in.",
    message: "We have setup GitHub Actions & they are working fine. ",
  });
});

app.get("/image", (req, res) => {
  res.send("Write CI / CD for build and pus docker image on Docker Hub.");
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
  console.log(`Server is running on PORT:${PORT}`);
});

/**
 * By default there should be a security group availabe when create a machine on Excloud
 * Configure
 */
