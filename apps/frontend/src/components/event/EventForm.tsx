import useEvent from "@/data/hooks/useEvent";
import Steps from "../shared/Steps";
import Input from "../shared/Input";
import { Alias } from "@/core";

export default function EventForm() {
  const { event, createEvent, changeEvent, validAlias } = useEvent();

  const labels = [
    "Identificação do Evento",
    "Local e Data",
    "Informações Finais",
  ];

  return (
    <Steps
      labels={labels}
      action={createEvent}
      actionLabel='Salvar'
      allowsNextStep={[true, true, false]}
    >
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
    </Steps>
  );
}
