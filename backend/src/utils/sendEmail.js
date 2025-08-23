export const sendEmail = async ({ to, subject, text }) => {
  console.log(`Sending email to ${to}:\nSubject: ${subject}\n${text}`);
  return true;
};
