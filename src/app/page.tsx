import Link from 'next/link';
import { ticketsPath } from '@/paths';

export default function HomePage() {
  return (
    <div>
      <h2 className="text-lg">Home Page</h2>

      <Link href={ticketsPath()} className="underline">
        Go to Tickets
      </Link>
    </div>
  );
}
