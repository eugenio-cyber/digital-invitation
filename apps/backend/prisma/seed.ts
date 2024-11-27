import { PrismaClient } from '@prisma/client';
import { events } from 'core';

async function seed() {
  const prisma = new PrismaClient();

  const transactions = events.map(async (event) => {
    await prisma.event.create({
      data: {
        id: event.id,
        alias: event.alias,
        password: event.password,
        name: event.name,
        date: event.date,
        location: event.location,
        description: event.description,
        imageUrl: event.imageUrl,
        imageBackground: event.imageBackground,
        expectedAudience: event.expectedAudience,
        guests: {
          create: event.guests.map((guest) => ({
            id: guest.id,
            name: guest.name,
            email: guest.email,
            confirmed: guest.confirmed,
            hasCompanions: guest.hasCompanions,
            qtdCompanions: guest.qtdCompanions,
          })),
        },
      },
    });
  });

  await Promise.all(transactions);
}

seed();
