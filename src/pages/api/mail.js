import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, phone, message } = req.body;

  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    replyTo: email,
    subject: subject,
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; padding: 20px; background-color: #f7f7f7;">
        <table style="max-width: 600px; margin: auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); width: 100%;">
            <thead style="background-color: #20C5A8; color: white;">
            <tr>
                <th colspan="2" style="padding: 10px 20px; font-size: 24px; text-align: left;">New Message from ${name}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td style="padding: 10px; font-weight: bold; width: 150px; text-align: left;">Client Name:</td>
                <td style="padding: 10px; text-align: left;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; width: 150px; text-align: left;">Phone:</td>
                <td style="padding: 10px; text-align: left;">${phone}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; width: 150px; text-align: left;">Email:</td>
                <td style="padding: 10px; text-align: left;">
                <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; width: 150px; text-align: left;">Subject:</td>
                <td style="padding: 10px; text-align: left;">${subject}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; width: 150px; text-align: left; vertical-align: top;">Message:</td>
                <td style="padding: 10px; text-align: left;">${message}</td>
            </tr>
            </tbody>
            <tfoot>
            </tfoot>
        </table>
        </div>
    `,
  };

  try {
    await transport.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error("SendMail error", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}