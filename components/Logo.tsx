import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/main-logo.png"
        alt="tiptap-react-ui logo"
        width={28}
        height={28}
        className="rounded"
      />
      <b>
        tiptap-<span className="text-[#8b5cf6]">react</span>-ui
      </b>
    </div>
  );
}
