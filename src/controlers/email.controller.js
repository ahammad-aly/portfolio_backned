import nodemailer from "nodemailer";

export async function sendEmail(req, res) {
  const { name, email, message } = req.body;

  if ([name, email, message].some((fields) => fields?.trim() === "")) {
    throw new ApiErrors(400, "All fields are required");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    sendMail: true,
    secure: true,
    port: 465,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.sendMail(
    {
      from: email,
      to: process.env.EMAIL_ADDRESS,
      subject: name,
      text: `Message: ${message}\n\nEmailed By: ${email}`,
      replyTo: email,
    },
    (err, info) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(info.envelope);
      //   console.log(info.messageId);
    }
  );
  return res
    .status(200)
    .json({ email: email, msg: "Message send successfully" });
}
