import { Router } from "express";
import { sendEmail } from "../controlers/email.controller.js";

const router = Router();

router.route("/").post(sendEmail);
router.route("/contact").post(sendEmail);

export default router;
