import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { EventsController } from './events.controller';
import { EventPrisma } from './event.prisma';

@Module({
  imports: [DbModule],
  controllers: [EventsController],
  providers: [EventPrisma],
})
export class EventsModule {}
