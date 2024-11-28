import Link from "next/link";
import LogoHome from "../components/templates/LogoHome";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center gap-10 justify-center bg-[url('/background-home.svg')] bg-cover">
      <div className='flex flex-col items-center gap-4'>
        <LogoHome />
        <p className='text-zinc-500 font-light w-96 leading-6 select-none text-center'>
          Crie e gerencie o convite do seu evento de forma rápido e fácil, e sem
          complicações!
        </p>
      </div>
      <Link href='/evento' className='button blue text-lg uppercase'>
        Crie o seu evento
      </Link>
    </div>
  );
}
