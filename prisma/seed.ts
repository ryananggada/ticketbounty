import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

const tickets = [
  {
    title: 'Cannot login',
    content: 'Cannot login after new account has been created.',
    status: 'DONE' as const,
  },
  {
    title: 'Hamburger navbar bugged',
    content: 'On mobile, clicking on hamburger navbar does nothing.',
    status: 'OPEN' as const,
  },
  {
    title: 'About page not found',
    content: 'Clicking on about page returns not found error.',
    status: 'IN_PROGRESS' as const,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log('DB Seed: Started...');

  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};

seed();
