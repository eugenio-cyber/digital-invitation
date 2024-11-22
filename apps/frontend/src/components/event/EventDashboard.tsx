import { Event, Guest } from "@/core";
import EventInformation from "@/components/event/EventInformation";
import QrCodeAccess from "@/components/event/QrCodeAccess";
import Statistic from "@/components/shared/Statistic";
import GuestList from "@/components/event/GuestList";

export interface EventDashboard {
  event: Event;
  presents: Guest[];
  absent: Guest[];
  total: number;
}

export default function EventDashboard(props: EventDashboard) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2 self-stretch'>
        <EventInformation event={props.event} className='flex-1' />
        <QrCodeAccess event={props.event} />
      </div>
      <div className='grid grid-cols-3 gap-6 mt-4'>
        <Statistic
          text='Expectativa de Convidados:'
          value={props.event.expectedAudience}
          image='/icons/guests.svg'
        />
        <Statistic
          text='Confirmações:'
          value={props.presents.length}
          image='/icons/confirmed.svg'
        />
        <Statistic
          text='Total Confirmado:'
          value={props.total}
          image='/icons/companions.svg'
        />
      </div>

      <button className='button blue self-end mt-12'>
        <span>Atualizar Lista de Convidados</span>
      </button>

      <span className='flex py-2 text-xl font-bold text-white/80'>
        Convidados que confirmaram PRESENÇA
      </span>
      <GuestList guests={props.presents} />

      <span className='flex py-2 text-xl font-bold text-white/80'>
        Convidados que confirmaram AUSÊNCIA
      </span>
      <GuestList guests={props.absent} />
    </div>
  );
}
