import { CircleCheckIcon, FileInputIcon, PencilIcon } from 'lucide-react';

export const TICKET_ICONS = {
  OPEN: <FileInputIcon />,
  IN_PROGRESS: <PencilIcon />,
  DONE: <CircleCheckIcon />,
};

export const TICKET_STATUS_LABELS = {
  OPEN: 'Open',
  DONE: 'Done',
  IN_PROGRESS: 'In Progress',
};
