"use client";
import EventInformation from "@/components/event/EventInformation";
import CopyClipboard from "@/components/shared/CopyClipboard";
import Window from "@/components/shared/Window";
import { IconFingerprint, IconLink } from "@tabler/icons-react";
import useEvent from "@/data/hooks/useEvent";
import { Event } from "core";
import QrCodeAccess from "@/components/event/QrCodeAccess";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const { event } = useEvent();
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.origin);
  }, []);

  return (
    <Window
      label='Seu evento foi criado:'
      title={event.name}
      background={event.imageBackground}
      image={event.imageUrl}
    >
      <EventInformation hiddenName event={event as Event}></EventInformation>
      <div className='flex gap-5 items-center py-6'>
        <div className='flex-1 flex flex-col gap-5'>
          <CopyClipboard
            icon={IconLink}
            label='Link para Convidar'
            text={`${currentUrl}/convite/${event.alias}`}
          />
          <CopyClipboard
            icon={IconLink}
            label='Link Administrador'
            text={`${currentUrl}/evento/admin/${event.id}`}
          />
          <CopyClipboard
            icon={IconFingerprint}
            label='Senha Administrador'
            text={event.password ?? ""}
            warning='Essa senha não será exibida novamente, então guarde-a com cuidado!'
          />
        </div>
        <QrCodeAccess event={event as Event} />
      </div>
    </Window>
  );
}
