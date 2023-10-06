import HeroImage from "@/public/assets/images/hero5.jpg";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-screen items-center justify-center">
      <div
        className="bg top-0 h-full w-full"
        style={{
          backgroundImage: `url(${HeroImage.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute top-0 z-10 h-full w-full bg-background/80" />
      <div className="absolute z-20 text-center">
        <h1 className="text-3xl font-semibold tracking-widest text-foreground sm:text-5xl md:text-7xl">
          MAHARLIKA
        </h1>
        <p className="text-xs leading-7 text-foreground md:px-[25%] md:text-xl">
          PHILIPPINES
        </p>
      </div>
    </section>
  );
};
