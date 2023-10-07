"use client";
import Cloud from "@/public/assets/images/cloud.png";
import Image from "next/image";

const Clouds = () => {
  return (
    <>
      <div className="absolute -left-full top-0 z-10 h-full w-screen">
        <Image
          className="duration-slow translate-x-[1000%] opacity-50 transition-all ease-in-out animate-in repeat-infinite"
          src={Cloud.src}
          width={720}
          height={720}
        />
      </div>
      <div className="absolute -left-96 top-96 z-10 h-full w-screen">
        <Image
          className="duration-slow translate-x-[1000%] opacity-50 transition-all ease-in-out animate-in repeat-infinite"
          src={Cloud.src}
          width={480}
          height={480}
        />
      </div>
      <div className="absolute -left-full top-full z-10 h-full w-screen">
        <Image
          className="duration-slow translate-x-[1000%] opacity-50 transition-all ease-in-out animate-in repeat-infinite"
          src={Cloud.src}
          width={680}
          height={680}
        />
      </div>
    </>
  );
};

export default Clouds;
