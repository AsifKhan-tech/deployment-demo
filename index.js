import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "^1.1";

app.get("/", (req, res) => {
  res.send("Hello from deployment app v1 ");
});

app.get("/test", (req, res) => {
  res.send("This is my v1 of demo deployment");
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
 */
