import express from "express";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

import emailRoute from "./routers/email.router.js";
app.use("/api/email", emailRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: http://localhost:${process.env.PORT}`);
});

export { app };
