import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function Logo() {
  return (
    <Link
      href='/'
      className={`${font.className} flex flex-col items-center gap-2`}
    >
      <Image src='/logo.svg' height={100} width={100} alt='Logo' />
      <div className='text-5xl'>
        CONVIT<span className='text-blue-500'>3</span> DIGITAL
      </div>
    </Link>
  );
}
