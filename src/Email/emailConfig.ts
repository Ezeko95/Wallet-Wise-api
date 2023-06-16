import * as nodemailer from "nodemailer";
import * as fs from "fs";

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "walletwise23@gmail.com",
      pass: "xbaxtaxtqpeawayl",
    },
  });

  const htmlTemplate = fs.readFileSync("newsLetter.html", "utf-8");
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "<walletwise23@gmail.com>", // sender address
    to: "manuel.latorre11@gmail.com, julirdrg@gmail.com", // list of receivers
    subject: "Thank you for subscribing to WalletWise", // Subject line
    text: "Hola TyperEscripter", // plain text body
    html: htmlTemplate, // html body
  });
}

sendEmail().catch(console.error);
