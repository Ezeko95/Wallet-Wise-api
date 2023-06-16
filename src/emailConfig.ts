import * as nodemailer from "nodemailer";

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

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '<walletwise23@gmail.com>', // sender address
    to: "matias2k00@gmail.com, cisneros.n.b@outlook.com", // list of receivers
    subject: "Thank you for subscribing to WalletWise", // Subject line
    text: "Que onda typerescripteros", // plain text body
    html: "<b>Como va esa banda loca?</b>", // html body
  });

}

sendEmail().catch(console.error);
