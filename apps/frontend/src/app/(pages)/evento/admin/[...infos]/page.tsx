"use client";
import { Event, Guest, events } from "@/core";
import { use, useState, useEffect } from "react";
import EventDashboard from "@/components/event/EventDashboard";
import EventFormPassword from "@/components/event/EventFormPassword";

export default function AdminEventPage(props: any) {
  const params: any = use(props.params);
  const id = params.infos[0];

  const [event, setEvent] = useState<Event | null>(null);
  const [password, setPassword] = useState<string | null>(
    params.infos[1] || null
  );
  const presents = event?.guests.filter((c) => c.confirmed) ?? [];
  const absent = event?.guests.filter((c) => !c.confirmed) ?? [];

  const total =
    presents?.reduce((total: number, guest: Guest) => {
      return total + guest.qtdCompanions + 1;
    }, 0) ?? 0;

  function loadEvent() {
    const event = events.find((ev) => ev.id === id && ev.password === password);
    setEvent(event ?? null);
  }

  useEffect(() => {
    loadEvent();
  }, [id, password]);

  return (
    <div className='flex flex-col items-center'>
      {event ? (
        <EventDashboard
          event={event}
          presents={presents}
          absent={absent}
          total={total}
        />
      ) : (
        <EventFormPassword />
      )}
    </div>
  );
}
