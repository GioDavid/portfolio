import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient({ 
    log: [
        { emit: "event", level: "query" },
        { emit: "event", level: "info" },
        { emit: "event", level: "warn" },
        { emit: "event", level: "error" },
      ],
});

async function main() {
  await prisma.project.create({
    data: {
      title: 'My Portfolio 1',
      description: 'Fullstack TypeScript portfolio using Next.js and Express.',
      url: 'https://myportfolio.com',
      image: 'https://via.placeholder.com/300',
    },
  });

  console.log('✅ Seeded database');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
