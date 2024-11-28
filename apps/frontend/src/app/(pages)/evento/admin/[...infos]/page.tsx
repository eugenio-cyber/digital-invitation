"use client";
import { Event, Guest, events } from "core";
import { use, useState, useEffect, useCallback } from "react";
import EventDashboard from "@/components/event/EventDashboard";
import EventFormPassword from "@/components/event/EventFormPassword";
import useAPI from "@/data/hooks/useApi";

export default function AdminEventPage(props: any) {
  const { httpPost } = useAPI();
  const params: any = use(props.params);
  const id = params.infos[0];

  const [event, setEvent] = useState<Event | null>(null);
  const [password, setPassword] = useState<string>(params.infos[1] || "");
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

  const getEvent = useCallback(async () => {
    if (!id || !password) return;

    const event = await httpPost("/eventos/acessar", { id, password });
    setEvent(event);
  }, [httpPost, id, password]);

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
          updateGuestList={getEvent}
        />
      ) : (
        <EventFormPassword
          accessEvent={getEvent}
          password={password}
          setPassword={setPassword}
        />
      )}
    </div>
  );
}
