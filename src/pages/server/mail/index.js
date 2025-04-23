export async function sendEmail({ country, name, email, phone, message }) {
  try {

    console.log({
      country,
      name,
      email,
      phone,
      subject: "EdgoConsulstants Enquiry",
      message,
    })
    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country,
        name,
        email,
        phone,
        subject: "EdgoConsulstants Enquiry",
        message,
      }),
    });

    console.log("response ==>>", response);

    if (response.ok) {
      console.log("Email sent successfully!");
      return true;
    } else {
      const errorData = await response.json();
      console.error("Failed to send email:", errorData);
      return false;
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
