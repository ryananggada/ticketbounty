import Link from 'next/link';
import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { homePath } from '@/paths';

const NotFoundPage = () => {
  return (
    <Placeholder
      label="Page not found"
      button={
        <Button asChild variant="outline">
          <Link href={homePath()}>Go to Home</Link>
        </Button>
      }
    />
  );
};

export default NotFoundPage;
