import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import {
  complementGuest,
  complementEvent,
  Guest,
  DateParser,
  Event,
  Id,
} from 'core';
import { EventPrisma } from './event.prisma';

@Controller('eventos')
export class EventsController {
  constructor(readonly repo: EventPrisma) {}

  @Post()
  async saveEvent(@Body() event: Event) {
    const savedEvent = await this.repo.searchForAlias(event.alias);

    if (savedEvent && savedEvent.id !== event.id) {
      throw new HttpException('Já existe um evento com esse alias.', 400);
    }

    const fullEvent = complementEvent(this.deserialize(event));
    await this.repo.save(fullEvent);
  }

  @Post(':alias/convidado')
  async saveGuest(@Param('alias') alias: string, @Body() guest: Guest) {
    const event = await this.repo.searchForAlias(alias);

    if (!event) {
      throw new HttpException('Evento não encontrado.', 400);
    }

    const fullEvent = complementGuest(guest);
    await this.repo.saveGuest(event, fullEvent);
  }

  @Post('acessar')
  async accessEvent(@Body() data: { id: string; password: string }) {
    const event = await this.repo.searchForId(data.id);

    if (!event) {
      throw new HttpException('Evento não encontrado.', 400);
    }

    if (event.password !== data.password) {
      throw new HttpException('Senha não corresponde ao evento.', 400);
    }

    return this.serialize(event);
  }

  @Get()
  async searchEvents() {
    const events = await this.repo.searchAll();
    return events.map(this.serialize);
  }

  @Get(':idOrAlias')
  async searchEvent(@Param('idOrAlias') idOrAlias: string) {
    let event: Event;

    if (Id.isValid(idOrAlias)) {
      event = await this.repo.searchForId(idOrAlias, true);
    } else {
      event = await this.repo.searchForAlias(idOrAlias, true);
    }

    return this.serialize(event);
  }

  @Get('validar/:alias/:id')
  async validateAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const event = await this.repo.searchForAlias(alias);
    return { valid: !event || event.id === id };
  }

  private serialize(event: Event) {
    if (!event) return null;

    return {
      ...event,
      data: DateParser.format(event.date),
    };
  }

  private deserialize(event: any): Event {
    if (!event) return null;
    return {
      ...event,
      date: DateParser.unformat(event.date),
    } as Event;
  }
}
