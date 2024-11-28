import useEvent from "../../data/hooks/useEvent";
import Steps from "../shared/Steps";
import Input from "../shared/Input";
import { Alias, DateParser } from "core";

export default function EventForm() {
  const { event, createEvent, changeEvent, validAlias } = useEvent();
  const labels = [
    "Identificação do Evento",
    "Local e Data",
    "Informações Finais",
  ];
  const allowsNextStep: boolean[] = [
    !!event.alias && !!validAlias && !!event.name,
    !!event.date && !!event.location,
    !!event.description &&
      (event.expectedAudience ?? 0) > 0 &&
      !!event.imageUrl &&
      !!event.imageBackground,
  ];

  return (
    <Steps
      labels={labels}
      action={createEvent}
      actionLabel='Salvar'
      allowsNextStep={allowsNextStep}
    >
      <div className='flex flex-col gap-5'>
        <Input
          label='Identificador'
          description='Identificador único e exclusivo para o evento (usado na URL)'
          value={Alias.format(event.alias ?? "")}
          onChange={(e) =>
            changeEvent({
              ...event,
              alias: Alias.format(e.target.value),
            })
          }
          error={validAlias ? "" : "Alias já foi utilizado em outro evento"}
        ></Input>
        <Input
          label='Nome'
          description='Nome do evento (ex.: "Festa de Aniversário do João")'
          value={event.name ?? ""}
          onChange={(e) =>
            changeEvent({
              ...event,
              name: e.target.value,
            })
          }
        ></Input>
      </div>
      <div className='flex flex-col gap-5'>
        <Input
          label='Data'
          description='Data e hora em que o evento ocorrerá'
          type='datetime-local'
          value={DateParser.format(event.date ?? new Date())}
          onChange={(e) =>
            changeEvent({
              ...event,
              date: DateParser.unformat(e.target.value),
            })
          }
        ></Input>
        <Input
          label='Local'
          description='Local onde o evento será realizado'
          value={event.location ?? ""}
          onChange={(e) =>
            changeEvent({
              ...event,
              location: e.target.value,
            })
          }
        ></Input>
      </div>
      <div className='flex flex-col gap-5'>
        <Input
          label='Descrição'
          description='Descrição do evento (ex.: "Só entra se trouxer presente!")'
          value={event.description ?? ""}
          onChange={(e) =>
            changeEvent({
              ...event,
              description: e.target.value,
            })
          }
        ></Input>
        <Input
          label='Imagem'
          description='URL da imagem que será exibida no convite'
          value={event.imageUrl ?? ""}
          onChange={(e) =>
            changeEvent({
              ...event,
              imageUrl: e.target.value,
            })
          }
        ></Input>
        <Input
          label='Background'
          description='URL da imagem que será exibida como background no convite'
          value={event.imageBackground ?? ""}
          onChange={(e) =>
            changeEvent({
              ...event,
              imageBackground: e.target.value,
            })
          }
        ></Input>
        <Input
          label='Público Esperado'
          description='Total de convidados e acompanhantes esperados'
          type='number'
          min={1}
          value={event.expectedAudience ?? 1}
          onChange={(e) =>
            changeEvent({
              ...event,
              expectedAudience: Number(e.target.value),
            })
          }
        ></Input>
      </div>
    </Steps>
  );
}
