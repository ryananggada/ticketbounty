import { Suspense } from 'react';
import { CardCompact } from '@/components/card-compact';
import { Heading } from '@/components/heading';
import { RedirectToast } from '@/components/redirect-toast';
import { Spinner } from '@/components/spinner';
import { TicketList } from '@/features/ticket/components/ticket-list';
import { TicketUpsertForm } from '@/features/ticket/components/ticket-upsert-form';

export default function TicketsPage() {
  return (
    <>
      <div className="flex-1 flex flex-col gap-y-8">
        <Heading title="Tickets" description="All your tickets at one place" />

        <CardCompact
          className="w-full max-w-[420px] self-center"
          title="Create Ticket"
          description="A new ticket will be created"
          content={<TicketUpsertForm />}
        />

        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </div>

      <RedirectToast />
    </>
  );
}
