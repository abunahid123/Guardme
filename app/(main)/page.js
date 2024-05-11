import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/Herosection/HeroImage.jpeg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <div className=" w-full h-full bg-gradient-to-l to-[#0D1A3C] from-[#234393]  ">
        <Image
          src={HeroImage}
          className=" w-full h-full object-cover -z-10 opacity-50 "
        />
      </div>
    </main>
  );
}
