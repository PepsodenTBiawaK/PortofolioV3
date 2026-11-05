import Image from "next/image";

export default function ToolsGallery({
  items,
}: {
  items: { image: string; text: string }[];
}) {
  return (
    <ul
      aria-label="Tools dan teknologi"
      className="flex h-full items-center gap-4 overflow-x-auto snap-x snap-mandatory px-2 py-6 sm:gap-6"
    >
      {items.map((item) => (
        <li
          key={item.text}
          className="flex h-44 w-36 shrink-0 snap-center flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 transition-transform hover:-translate-y-2 sm:w-44"
        >
          <Image
            src={item.image}
            alt=""
            width={80}
            height={80}
            loading="lazy"
            className="h-20 w-20 object-contain"
          />
          <span className="font-semibold text-[#03fa97]">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
