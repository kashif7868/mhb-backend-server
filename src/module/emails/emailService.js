// module/emails/emailService.js
const nodemailer = require("nodemailer");
const { generateOrderConfirmationHTML, generateOrderConfirmationText } = require("./emailTemplate");

const sendOrderConfirmationEmail = async (order) => {
  // Set up the transporter with SMTP configuration (Hostinger, Gmail, etc.)
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',  // Hostinger SMTP server
    port: 465,                  // SSL Port (465 for SSL)
    secure: true,               // Use SSL
    auth: {
      user: 'cs@mhbstore.com',  // Your email address
      pass: 'Rule113ion095@',    // Your email password
    },
  });

  // Define the email content using the HTML template
  const htmlContent = generateOrderConfirmationHTML(order);
  const textContent = generateOrderConfirmationText(order);

  const mailOptions = {
    from: '"Mhb Store" <cs@mhbstore.com>',  // Sender's email address with store name
    to: order.userDetails.email,            // Recipient's email address
    subject: `Order Confirmation - ${order.orderId}`,
    text: textContent,                      // Plain text content for email clients that do not support HTML
    html: htmlContent,                      // HTML content for email clients that support it
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent successfully.");
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }
};

module.exports = {
  sendOrderConfirmationEmail,
};
