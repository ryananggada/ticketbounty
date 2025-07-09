import { hash } from '@node-rs/argon2';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
  {
    username: 'admin',
    email: 'admin@mail.com',
    emailVerified: true,
  },
  {
    username: 'user1',
    email: 'user1@mail.com',
    emailVerified: true,
  },
];

const tickets = [
  {
    title: 'Cannot login',
    content: 'Cannot login after new account has been created.',
    status: 'DONE' as const,
    deadline: '2025-06-01',
    bounty: 499,
  },
  {
    title: 'Hamburger navbar bugged',
    content: 'On mobile, clicking on hamburger navbar does nothing.',
    status: 'OPEN' as const,
    deadline: '2025-06-02',
    bounty: 399,
  },
  {
    title: 'About page not found',
    content: 'Clicking on about page returns not found error.',
    status: 'IN_PROGRESS' as const,
    deadline: '2025-06-03',
    bounty: 599,
  },
];

const comments = [
  { content: 'First comment from DB.' },
  { content: 'Second comment from DB.' },
  { content: 'Third comment from DB.' },
];

const seed = async () => {
  const t0 = performance.now();
  console.log('DB Seed: Started...');

  await prisma.comment.deleteMany();
  await prisma.ticket.deleteMany();
  await prisma.user.deleteMany();
  await prisma.organization.deleteMany();
  await prisma.membership.deleteMany();

  const passwordHash = await hash('password');

  const dbUsers = await prisma.user.createManyAndReturn({
    data: users.map((user) => ({
      ...user,
      passwordHash,
    })),
  });

  const dbOrganization = await prisma.organization.create({
    data: {
      name: 'Organization 1',
    },
  });

  await prisma.membership.createMany({
    data: [
      {
        userId: dbUsers[0].id,
        organizationId: dbOrganization.id,
        isActive: true,
        membershipRole: 'ADMIN',
      },
      {
        userId: dbUsers[1].id,
        organizationId: dbOrganization.id,
        isActive: false,
        membershipRole: 'MEMBER',
      },
    ],
  });

  const dbTickets = await prisma.ticket.createManyAndReturn({
    data: tickets.map((ticket) => ({
      ...ticket,
      userId: dbUsers[0].id,
    })),
  });

  await prisma.comment.createMany({
    data: comments.map((comment) => ({
      ...comment,
      ticketId: dbTickets[0].id,
      userId: dbUsers[1].id,
    })),
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};

seed();
