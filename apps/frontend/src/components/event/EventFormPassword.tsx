import Input from "../shared/Input";

export interface EventFormPasswordProps {
  password: string;
  setPassword: (password: string) => void;
  accessEvent: () => void;
}

export default function EventFormPassword(props: EventFormPasswordProps) {
  return (
    <div
      className='flex flex-col items-center gap-4 bg-zinc-900 p-8
      rounded-lg shadow-lg w-[500px] border border-zinc-800'
    >
      <h1 className='text-3xl font-black'>Bem-vindo(a)</h1>
      <h2 className='text-lg font-semibold -mt-3'>Administrador</h2>
      <p className='text-sm text-zinc-400'>
        Insira sua senha para gerenciar o evento
      </p>
      <Input
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
        placeholder='Digite sua senha'
        type='password'
        otherClassName='w-full'
      />
      <button className='button blue' onClick={props.accessEvent}>
        Acessar Evento
      </button>
    </div>
  );
}
