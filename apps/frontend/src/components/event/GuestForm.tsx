import { Guest } from "core";
import Input from "../shared/Input";
import Switch from "../shared/Switch";

export interface GuestFormProps {
  guest: Partial<Guest>;
  guestChanged: (guest: Partial<Guest>) => void;
}

export default function GuestForm(props: GuestFormProps) {
  return (
    <div className='flex flex-col gap-5'>
      <Input
        label='Nome'
        value={props.guest.name ?? ""}
        onChange={(e) =>
          props.guestChanged({ ...props.guest, name: e.target.value })
        }
      />
      <Input
        label='Email'
        value={props.guest.email ?? ""}
        type='email'
        onChange={(e) =>
          props.guestChanged({ ...props.guest, email: e.target.value })
        }
      />
      <div className='flex gap-5'>
        <Switch
          label='Presença Confirmada?'
          value={props.guest.confirmed ?? true}
          className='flex-1'
          onChange={(valor) =>
            props.guestChanged({ ...props.guest, confirmed: valor })
          }
        />
        {props.guest.confirmed && (
          <div className='flex-1 flex gap-5'>
            <Switch
              className='flex-1'
              label='Possui Acompanhantes?'
              value={props.guest.hasCompanions ?? false}
              onChange={(valor) =>
                props.guestChanged({
                  ...props.guest,
                  hasCompanions: valor,
                  qtdCompanions: valor ? 1 : 0,
                })
              }
            />
            {props.guest.hasCompanions && (
              <Input
                label='Quantos Acompanhantes?'
                type='number'
                min={1}
                value={props.guest.qtdCompanions ?? 1}
                onChange={(e) =>
                  props.guestChanged({
                    ...props.guest,
                    qtdCompanions: +e.target.value,
                  })
                }
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
