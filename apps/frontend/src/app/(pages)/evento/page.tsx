"use client";
import EventForm from "@/components/event/EventForm";
import Window from "@/components/shared/Window";
import useEvent from "@/data/hooks/useEvent";

export default function EventPage() {
  const { event } = useEvent();

  return (
    <div className=''>
      <Window
        label='Qual evento vamos criar?'
        title={event?.name ? event?.name : "Novo Evento"}
        image={event?.imageUrl}
        background={event?.imageBackground}
      >
        <EventForm />
      </Window>
    </div>
  );
}
