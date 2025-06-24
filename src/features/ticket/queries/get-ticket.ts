import { initialTickets } from '@/data';
import { Ticket } from '../types';

export const getTicket = async (id: string): Promise<Ticket | null> => {
  const ticket = initialTickets.find((ticket) => ticket.id === id);

  return new Promise((resolve) => {
    if (ticket) {
      resolve(ticket);
    } else {
      resolve(null);
    }
  });
};
