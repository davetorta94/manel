import Image from "next/image";
import { NumberTicker } from "./magicui/number-ticker";

export function SocialMedia() {
  return (
    <>
    <div className="flex flex-row">

    <Image src='/youtube-color-svgrepo-com.svg' width={100} height={60} alt="Logo de youtube" aria-label="Logo de youtube"/>

    <NumberTicker
      value={100}
      startValue={80}
      className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white dark:text-white"
      />
   
      </div>
   
      </>
  );
}
