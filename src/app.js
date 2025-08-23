import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(
  cors({
    // origin: "https://as-ahammad.vercel.app",
    origin: "http://localhost:5173",
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

import emailRoute from "./routers/email.router.js";
app.use("/api/email", emailRoute);

app.listen(process.env.PORT || 4000, () => {
  console.log(
    `Server running on port: http://localhost:${process.env.PORT || 4000}`
  );
});

export { app };
