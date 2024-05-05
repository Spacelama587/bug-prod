import { Priority } from "@prisma/client";
import { Flame } from "lucide-react";
import React from "react";
import TicketPriorityBadge from "./TicketPriorityBadge";
interface Props {
  priority: Priority;
}

const priorityMap: Record<Priority, { label: string; level: 1 | 2 | 3 | 4 }> = {
  CRITICAL: {label: "Critical", level: 4 },
  HIGH: { label: "High", level: 3 },
  MEDIUM: { label: "Medium", level: 2 },
  LOW: { label: "Low", level: 1 },
 
};

const TicketPriority = ({ priority }: Props) => {
  return (
    <TicketPriorityBadge priority={priority} />
  );
};

export default TicketPriority;