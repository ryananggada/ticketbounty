import { inngest } from '@/lib/inngest';
import { prisma } from '@/lib/prisma';
import { sendEmailVerification } from '../emails/send-email-verification';
import { generateEmailVerificationCode } from '../utils/generate-email-verification-code';

export type EmailVerificationEventArgs = {
  data: {
    userId: string;
  };
};

export const emailVerificationEvent = inngest.createFunction(
  { id: 'email-verificiation' },
  { event: 'app/auth.sign-up' },
  async ({ event }) => {
    const { userId } = event.data;

    const user = await prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });

    const verificationCode = await generateEmailVerificationCode(
      user.id,
      user.email,
    );

    const result = await sendEmailVerification(
      user.username,
      user.email,
      verificationCode,
    );

    if (result.rejected) {
      throw new Error(`Error: ${result.rejectedErrors}`);
    }

    return { event, body: result };
  },
);
