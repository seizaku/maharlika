import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import SvgMap from "@/components/svg/philippines-svg";
import {
  Section,
  gridVariants,
  SectionHeading,
  SectionParagraph,
} from "@/components/section";
import {
  HiOutlineWifi,
  HiOutlineGlobe,
  HiOutlineSun,
  HiDeviceMobile,
} from "react-icons/hi";
import { GiIsland } from "react-icons/gi";
import { Footer } from "@/components/footer";
import Counter from "@/app/(components)/counter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden backdrop-blur-md">
        <Hero />
        <Section className="absolute bottom-0 z-20 flex">
          <div className="mt-12 grid grid-cols-4 gap-4">
            <Counter title="Population" number="100972303">
              <HiOutlineGlobe className="mb-4 h-12 w-12 drop-shadow-md" />
            </Counter>
            <Counter title="Mobile Users" number="134107832">
              <HiDeviceMobile className="mb-4 h-12 w-12 drop-shadow-md" />
            </Counter>
            <Counter title="Islands" number="7641">
              <GiIsland className="mb-4 h-12 w-12 drop-shadow-md" />
            </Counter>
            <Counter title="Average Temp" number="32" symbol="°C">
              <HiOutlineSun className="mb-4 h-12 w-12 drop-shadow-md" />
            </Counter>
          </div>
        </Section>
      </main>
    </>
  );
}
