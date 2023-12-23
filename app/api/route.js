import Resend from 'resend';
import React from 'react';

const resend = new Resend("re_NHZP9KhL_AATQpgHSGyAhaMBtgM1jFo6H");

export const sendEmail = async (formData) => {
  const name = formData.get("name");
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "lehoufi.said@gmail.com",
      subject: `Message from ${name}`,
      html: `<p>${message}</p><p>From: ${senderEmail}</p>`
    });

    return { success: true, response };
  } catch (error) {
    return { success: false, error: error.message || "An error occurred" };
  }
};
