'use server';

import { z } from 'zod';
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from '@/components/form/utils/to-action-state';
import { prisma } from '@/lib/prisma';
import { generatePasswordResetLink } from '../utils/generate-password-reset-link';

const passwordForgotSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).max(191).email(),
});

export const passwordForgot = async (
  _actionState: ActionState,
  formData: FormData,
) => {
  try {
    const { email } = passwordForgotSchema.parse(Object.fromEntries(formData));

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return toActionState('ERROR', 'Incorrect email', formData);
    }

    const passwordResetLink = await generatePasswordResetLink(user.id);
    console.log(passwordResetLink);
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  return toActionState('SUCCESS', 'Check your email for a reset link');
};
