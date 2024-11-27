"use client";
import {
  createEmptyEvent,
  createEmptyGuest,
  Event,
  Guest,
  DateParser,
} from "core";
import { createContext, useCallback, useEffect, useState } from "react";
import useAPI from "../hooks/useApi";
import { useRouter } from "next/navigation";

export interface EventContextProps {
  event: Partial<Event>;
  guest: Partial<Guest>;
  validAlias: boolean;

  changeEvent(event: Partial<Event>): void;
  changeGuest(guest: Partial<Guest>): void;
  loadEvent(verificationCode: string): Promise<void>;
  createEvent(): Promise<void>;
  addGuest(): void;
}

const EventContext = createContext<EventContextProps>({} as any);

export function EventProvider(props: any) {
  const { httpGet, httpPost } = useAPI();
  const router = useRouter();

  const [validAlias, setValidAlias] = useState(true);
  const [event, setEvent] = useState<Partial<Event>>(createEmptyEvent());
  const [guest, setGuest] = useState<Partial<Guest>>(createEmptyGuest());

  const createEvent = useCallback(
    async function () {
      try {
        const createdEvent = await httpPost("/eventos", event);
        router.push("/evento/sucesso");
        setEvent({
          ...createdEvent,
          date: DateParser.unformat(createdEvent.date),
        });
      } catch (error: any) {}
    },
    [event, httpPost, router]
  );

  const loadEvent = useCallback(
    async function (verificationCode: string) {
      try {
        const event = await httpGet(`/eventos/${verificationCode}`);
        if (!event) return;
        setEvent({
          ...event,
          date: DateParser.unformat(event.date),
        });
      } catch (error: any) {}
    },
    [httpGet, setEvent]
  );

  const addGuest = useCallback(
    async function () {
      try {
        await httpPost(`/eventos/${event.alias}/convidado`, guest);
        router.push("/convite/obrigado");
      } catch (error: any) {}
    },
    [httpPost, event, guest, router]
  );

  const checkAlias = useCallback(
    async function () {
      try {
        const { valid } = await httpGet(
          `/eventos/validar/${event.alias}/${event.id}`
        );
        setValidAlias(valid);
      } catch (error: any) {}
    },
    [httpGet, event]
  );

  useEffect(() => {
    if (event?.alias) checkAlias();
  }, [event?.alias, checkAlias]);

  return (
    <EventContext.Provider
      value={{
        event,
        guest,
        validAlias,
        changeEvent: setEvent,
        changeGuest: setGuest,
        createEvent,
        loadEvent,
        addGuest,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
}

export default EventContext;
