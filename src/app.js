import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";

const app = express();

dotenv.config();
const port = 4000;

app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

import emailRoute from "./routers/email.router.js";
app.use("/api/email", emailRoute);

app.get("/", (req, res) => {
  res.send("<h2>Hi there, this is from portfolio backend</h2>");
});

app.listen(port, () => {
  console.log(`Server is runing at port : http://localhost:${port}`);
});
export const handler = serverless(app);
export default app;
