import Link from "next/link";
import Logo from "@/components/Logo";

export default function LandingHeader() {
  return (
    <header className="flex h-20 shrink-0 items-center justify-between">
      <Link
        href="/"
        aria-label="tiptap-react-ui home"
        className="rounded-md bg-white/95 px-3 py-2 text-[#14102e] shadow-lg shadow-black/20"
      >
        <Logo />
      </Link>
      <nav className="hidden items-center gap-7 text-sm font-medium text-white/72 md:flex">
        <Link href="/docs" className="transition hover:text-white">
          Docs
        </Link>
        <Link
          href="https://github.com/knnthdn/tiptap-react-ui"
          className="transition hover:text-white"
        >
          GitHub
        </Link>
        <Link href="/playground" className="transition hover:text-white">
          Playground
        </Link>
      </nav>
    </header>
  );
}
