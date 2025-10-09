import { Resend } from "resend";

export async function sendEmail(req, res) {
  const resend = new Resend(`${process.env.EMAIL_PASS}`);
  const { name, email, message } = req.body;

  if ([name, email, message].some((fields) => fields?.trim() === "")) {
    return res
      .status(400)
      .json({ stat: 400, msgerr: "All fields are required" });
  }
  resend.emails.send({
    from: email,
    to: process.env.EMAIL_ADDRESS,
    subject: "Hello Ahammad you have an email from your portfolio.",
    html: message,
  });
}

// import nodemailer from "nodemailer";

// export async function sendEmail(req, res) {
//   const { name, email, message } = req.body;

//   if ([name, email, message].some((fields) => fields?.trim() === "")) {
//     return res
//       .status(400)
//       .json({ stat: 400, msgerr: "All fields are required" });
//   }

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     sendMail: true,
//     secure: true,
//     port: 465,
//     auth: {
//       user: process.env.EMAIL_ADDRESS,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   transporter.sendMail(
//     {
//       from: email,
//       to: process.env.EMAIL_ADDRESS,
//       subject: name,
//       text: `Message from your Portfolio: ${message}\n\nEmailed By: ${email}`,
//       replyTo: email,
//     },
//     (err, info) => {
//       if (err) {
//         return res.json({ msgErr: err });
//       }
//     }
//   );
//   return res
//     .status(200)
//     .json({ email: email, msg: "Message send successfully" });
// }
