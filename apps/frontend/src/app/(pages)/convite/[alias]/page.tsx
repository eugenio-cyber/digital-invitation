"use client";
import GuestForm from "@/components/event/GuestForm";
import EventInformation from "@/components/event/EventInformation";
import Window from "@/components/shared/Window";
import Loading from "@/components/shared/Loading";
import useEvent from "@/data/hooks/useEvent";
import { Event } from "core";
import { use, useEffect } from "react";

export default function PaginaConvite(props: any) {
  const params: any = use(props.params);
  const { event, guest, changeGuest, addGuest, loadEvent } = useEvent();

  useEffect(() => {
    loadEvent(params.alias);
  }, [params.alias]);

  return event?.alias ? (
    <div>
      <Window
        label='Você foi convidado para:'
        title={event.name}
        image={event.imageUrl}
        background={event.imageBackground}
      >
        <EventInformation hiddenName event={event as Event} />
        <div className='flex flex-col gap-4 pt-10'>
          <span className='text-xl font-bold'>Insira seus dados</span>
          <div className='border-t border-zinc-800'></div>
          <GuestForm guest={guest} guestChanged={changeGuest} />
          <button
            className={`button self-center ${guest.confirmed ? "green" : "red"}`}
            onClick={addGuest}
          >
            Confirmar {guest.confirmed ? "Presença" : "Ausência"}
          </button>
        </div>
      </Window>
    </div>
  ) : (
    <Loading />
  );
}
