import React from 'react';
import { Priority } from '@prisma/client';
import { Badge } from './ui/badge';

interface Props {
  priority: Priority;
}

const priorityMap: Record<
  Priority,
  { label: string; color: string }
> = {
  CRITICAL: { label: 'Critical', color: 'bg-red-600' },
  HIGH: { label: 'High', color: 'bg-orange-600' },
  MEDIUM: { label: 'Medium', color: 'bg-yellow-300' },
  LOW: { label: 'Low', color: 'bg-green-500' },
};

const TicketPriorityBadge = ({ priority }: Props) => {
  const { label, color } = priorityMap[priority];

  return (
    <Badge
      className={`${color} font-bold px-2 py-1 rounded-full shadow-md `}
    >
      {label}
    </Badge>
  );
};

export default TicketPriorityBadge;
