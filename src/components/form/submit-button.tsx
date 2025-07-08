'use client';

import { LoaderCircleIcon } from 'lucide-react';
import { cloneElement } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

type SubmitButtonProps = {
  label?: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>, 'svg'>;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
};

const SubmitButton = ({
  label,
  icon,
  variant = 'default',
  size = 'default',
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" variant={variant} size={size}>
      {pending ? (
        <LoaderCircleIcon className="w-4 h-4 animate-spin" />
      ) : icon ? (
        <>{cloneElement(icon, { className: 'w-4 h-4' })}</>
      ) : null}
      {label}
    </Button>
  );
};

export { SubmitButton };
