"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function Home() {
  const handleCopy = () => {
    navigator.clipboard.writeText("2NXaMVsYgcZfeZgRACBTCm").then(() => {
      toast("Copied to clipboard!");
    });
  };
  return (
    <div className="h-screen bg-[url(/bg-cloud.png)] bg-cover bg-no-repeat overflow-hidden relative">
      <div className="bg-[#D9D9D9] blur-custom filter w-[150%] ml-[-10%] h-[291px] absolute bottom-0 z-[40]" />
      <div className="bg-[url(/bottom-cloud.png)] z-10 bg-bottom bg-contain bg-no-repeat px-8 py-6 h-screen">
        <div className="flex items-center justify-between">
          <Image src="/fudderai-logo.png" alt="logo" width={200} height={200} />

          <div className=" gap-[1.29px] hidden md:flex">
            <Link
              href="https://x.com/Fudder_AI"
              className={cn(
                buttonVariants(),
                "border-l-0 bg-white/50 rounded-l-[14.207px] rounded-r-none p-[12.915px] h-auto"
              )}
            >
              <Image
                src="/x.svg"
                width={24.539}
                height={24.539}
                alt="Arrow Left"
              />
            </Link>
            <Button className="border-l-0 bg-white/50 rounded-r-[14.207px] rounded-l-none p-[10.671px] h-auto">
              <Image
                src="/pumpfun.svg"
                width={27.78}
                height={29.433}
                className="invisible"
                alt="Arrow Left"
              />
            </Button>
          </div>
        </div>

        <div className=" gap-[1.29px] absolute left-1/2 transform -translate-x-1/2 h-sm:top-[250px] top-[120px] flex md:hidden">
          <Link
            href="https://x.com/Fudder_AI"
            className={cn(
              buttonVariants(),
              "border-l-0 bg-white/50 hover:bg-white/30 rounded-l-[14.207px] rounded-r-none p-[14.499px] h-auto"
            )}
          >
            <Image
              src="/x.svg"
              width={24.539}
              height={24.539}
              alt="Arrow Left"
            />
          </Link>
          <Button className="border-l-0 bg-white/50 hover:bg-white/30 rounded-r-[14.207px] rounded-l-none p-[14.499px] h-auto">
            <Image
              src="/pumpfun.svg"
              width={27.78}
              height={29.433}
              className="invisible"
              alt="Arrow Left"
            />
          </Button>
        </div>

        <div className="flex items-end justify-center h-sm:md:h-[70vh] h-sm:h-[62vh] h-[54vh] max-w-[806.966px] mx-auto relative">
          <Image
            src="/tv-fuderrr.svg"
            alt="Fudderai"
            className="z-[150] mr-[-7.4%] md:mr-0"
            width={806.966}
            height={583}
          />

          <Image
            src="/dippp.png"
            alt="Fudderai"
            width={145}
            height={700}
            className="absolute hidden md:block right-0 z-[100]"
          />
          <Image
            src="/dipppm.png"
            alt="Fudderai"
            width={85}
            height={593}
            className="absolute block md:hidden right-0 z-[100]"
          />
          <div className="absolute h-sm:bottom-[-32%] bottom-[-35%]  w-full flex md:hidden items-center justify-center z-[160] opacity-80">
            <Image
              src="/slazzer.png"
              alt="Fudderai"
              className="z-10 h-sm:size[117px] size-[120px]"
              width={177}
              height={177}
            />
          </div>

          <div className="absolute md:flex hidden  items-center justify-between  bottom-10 md:w-[155%]  ">
            <Image
              src="/slazzer.png"
              alt="Fudderai"
              className="z-10"
              width={239}
              height={239}
            />
            <Image
              src="/slazzer.png"
              alt="Fudderai"
              className="z-10"
              width={239}
              height={239}
            />
          </div>
        </div>
        <div className="flex items-center max-w-[541px] mx-auto absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full z-[100] px-5">
          <div className="rounded-l-[15px] bg-[#3C4246] p-[10px] md:text-2xl text-base text-white">
            CA:
          </div>
          <input
            className="bg-[#9EB6D1] md:text-2xl text-base p-[10px] ring-0 w-full"
            value="2NXaMVsYgcZfeZgRACBTCm"
          />
          <Button
            className="rounded-l-none rounded-r-[15px] md:p-[10px] p-[6.45px] bg-white hover:bg-white/80 h-auto shadow-none ml-[2px]"
            onClick={handleCopy}
          >
            <Copy
              color="black"
              size={34}
              className="shrink-0 p-[3px] !size-[34px]"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
