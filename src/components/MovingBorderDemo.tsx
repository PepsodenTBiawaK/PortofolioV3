"use client";
import { Button } from "@/components/ui/moving-border";

export default function MovingBorderDemo() {
  return (
    <div className="flex justify-center md:justify-start mt-6 sm:mt-8">
      <Button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        borderRadius="9999px"
        containerClassName="!w-auto !h-auto !p-[1px] rounded-full"
        className="
          inline-flex items-center justify-center
          px-8 sm:px-10 py-3 sm:py-3.5
          whitespace-nowrap leading-none
          text-sm sm:text-base font-semibold
          text-[#03fa97] hover:text-white
          bg-[#06090E]/90 backdrop-blur-md
          border border-[#03fa97]/40 hover:border-[#03fa97]/80
          rounded-full
          shadow-[0_0_8px_rgba(3,250,151,0.35)]
          hover:shadow-[0_0_16px_rgba(3,250,151,0.6)]
          transition-all duration-300 ease-in-out
        "
        borderClassName="bg-[radial-gradient(#03fa97_40%,transparent_60%)] opacity-80"
        duration={4000}
      >
        Lihat Portofolio Saya
      </Button>
    </div>
  );
}
