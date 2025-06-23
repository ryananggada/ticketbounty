import { MessageSquareWarningIcon } from 'lucide-react';
import { ButtonHTMLAttributes, cloneElement } from 'react';

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>, 'svg'>;
  button?: React.ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
};

const Placeholder = ({
  label,
  icon = <MessageSquareWarningIcon />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, { className: 'w-16 h-16' })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, { className: 'h-10' })}
    </div>
  );
};

export { Placeholder };
