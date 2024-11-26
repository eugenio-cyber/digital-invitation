import { Guest } from "core";
import ConvidadoItem from "./GuestItem";

export interface ListaConvidadosProps {
  guests: Guest[];
}

export default function ListaConvidados(props: ListaConvidadosProps) {
  return (
    <div>
      <ul className='flex flex-col gap-2'>
        {props.guests.map((guest) => (
          <ConvidadoItem key={guest.id} guest={guest} />
        ))}
      </ul>
    </div>
  );
}
