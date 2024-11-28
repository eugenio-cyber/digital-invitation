import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function Logo() {
  return (
    <Link href='/' className={`${font.className} flex items-center gap-2`}>
      <Image src='/logo.svg' height={50} width={50} alt='Logo' />
      <div className='flex flex-col items-center text-lg leading-5'>
        <h1>
          CONVIT<span className='text-blue-500'>3</span>
        </h1>
        <h1>DIGITAL</h1>
      </div>
    </Link>
  );
}
