import { Injectable } from '@nestjs/common';
import { Event, Guest } from 'core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  createEvent(event: Event) {
    return this.prisma.event.create({
      data: {
        ...(event as any),
        guests: { create: event.guests },
      },
    });
  }

  saveGuest(event: Event, guest: Guest) {
    return this.prisma.guest.create({
      data: {
        ...guest,
        qtdCompanions: +(guest.qtdCompanions ?? 0),
        event: { connect: { id: event.id } },
      },
    });
  }

  async searchAll(): Promise<Event[]> {
    return this.prisma.event.findMany() as any;
  }

  async searchForId(
    id: string,
    fullInfo: boolean = false,
  ): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: { id },
      include: { guests: fullInfo },
    }) as any;
  }

  async searchForAlias(
    alias: string,
    fullInfo: boolean = false,
  ): Promise<Event | null> {
    return this.prisma.event.findUnique({
      select: {
        id: true,
        name: true,
        description: true,
        date: true,
        location: true,
        imageUrl: true,
        imageBackground: true,
        alias: true,
        password: fullInfo,
        expectedAudience: fullInfo,
        guests: fullInfo,
      },
      where: { alias },
    }) as any;
  }
}
