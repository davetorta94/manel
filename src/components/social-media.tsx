import Image from "next/image";
import { NumberTicker } from "./magicui/number-ticker";

export const SocialMedia = () => {
  return (
    <>
    <div className="flex lg:flex-row flex-col align-middle">

    {/*<div className="flex flex-row px-5">

    <Image src='/youtube-color-svgrepo-com.svg' width={100} height={60} alt="Logo de youtube" aria-label="Logo de youtube"/>

    <NumberTicker
      value={1450}
      startValue={1200}
      className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white dark:text-white"
      />
   
      </div>*/}

      <div className="flex flex-row px-5">

    <Image src='/youtube-color-svgrepo-com.svg' width={100} height={60} alt="Logo de youtube" aria-label="Logo de youtube"/>

    <NumberTicker
      value={1450}
      startValue={1200}
      className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white dark:text-white"
      />
   
      </div>
   
      </div>
      </>
  );
}
