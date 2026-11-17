export async function sendEmail(toEmail, scheduledAt) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": process.env.BREVO_API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: process.env.BREVO_SENDER_NAME,
        email: process.env.BREVO_SENDER_EMAIL,
      },
      to: [{ email: toEmail }],
      subject: "Test message",
      htmlContent: `<p>${scheduledAt}</p>`,
    }),
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    console.error("Brevo Error Details:", errorDetails);
    throw new Error("Failed to send email");
  }

  return await response.json();
}
