import nodemailer from "nodemailer";

interface Mailer {
  type: string;
  token: string;
  to: string;
}

export enum MailType {
  CONFIRM = "confirm",
  RESET = "reset",
}

export const mailer = async ({ type, token, to }: Mailer) => {
  let testAccount = await nodemailer.createTestAccount();
  console.log("token ", token);

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  const typeMail =
    type === MailType.CONFIRM
      ? {
          from: "no-reply board",
          to: to,
          subject: "Confirm account BOARD",
          html: `<a href = "http://localhost:3000/confirm-account?token=${token}" >Click this link to confirm account!<a>`,
        }
      : {
          from: "no-reply board",
          to: to,
          subject: "Reset password BOARD",
          html: `<a href = "http://localhost:3000/set-new-password?token=${token}" >Click this link to reset password!<a>`,
        };

  const info = await transporter.sendMail(typeMail);

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
