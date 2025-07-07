import { render } from '@react-email/components';
import EmailPasswordReset from '@/emails/password/email-password-reset';
import { createTransporter } from '@/lib/nodemailer';
// import { resend } from '@/lib/resend';

export const sendEmailPasswordReset = async (
  username: string,
  email: string,
  passwordResetLink: string,
) => {
  const emailHtml = await render(
    <EmailPasswordReset toName={username} url={passwordResetLink} />,
  );
  const emailTransporter = await createTransporter();

  return await emailTransporter.sendMail({
    from: process.env.GOOGLE_EMAIL,
    to: email,
    subject: 'Password Reset from TicketBounty',
    html: emailHtml,
  });

  /*
  return await resend.emails.send({
    from: (sender-domain-email),
    to: email,
    subject: 'Password Reset from TicketBounty',
    react: <EmailPasswordReset toName={username} url={passwordResetLink} />,
  });
  */
};
