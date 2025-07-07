import { render } from '@react-email/components';
import EmailVerification from '@/emails/auth/email-verification';
import { createTransporter } from '@/lib/nodemailer';

export const sendEmailVerification = async (
  username: string,
  email: string,
  verificationCode: string,
) => {
  const emailHtml = await render(
    <EmailVerification toName={username} code={verificationCode} />,
  );
  const emailTransporter = await createTransporter();

  return await emailTransporter.sendMail({
    from: process.env.GOOGLE_EMAIL,
    to: email,
    subject: 'Email Verification from TicketBounty',
    html: emailHtml,
  });
};
