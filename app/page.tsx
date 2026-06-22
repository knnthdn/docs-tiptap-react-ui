import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Braces,
  GitBranch,
  Layers3,
  Palette,
  Sparkles,
} from "lucide-react";
import LandingHeader from "@/components/LandingHeader";
import LandingEditorsDemo from "../components/LandingEditorsDemo";

const features = [
  {
    icon: Braces,
    title: "Preconfigured hook",
    text: "useTiptapEditor creates a Tiptap editor instance with supported extensions, lifecycle options, content helpers, and SSR controls.",
  },
  {
    icon: Layers3,
    title: "Complete editor UI",
    text: "RichTextEditor ships the toolbar, bubble menus, preview tabs, save action, image handling, and word count footer.",
  },
  {
    icon: Palette,
    title: "Render and style output",
    text: "Render saved JSON or HTML content, import one stylesheet, and tune editor surfaces with className props.",
  },
];

const docLinks = [
  {
    title: "Installation",
    href: "/docs/getting-started/installation",
    text: "Install the package, peer Tiptap dependencies, Tailwind CSS, shadcn/ui, and lucide-react.",
  },
  {
    title: "Basic usage",
    href: "/docs/example/basic-usage",
    text: "Build the smallest useful editor in React or Next.js with preview and save handling.",
  },
  {
    title: "RichTextEditor",
    href: "/docs/components/rich-text-editor",
    text: "Learn the editor props for preview mode, word count, save payloads, and content classes.",
  },
  {
    title: "useTiptapEditor",
    href: "/docs/hook/use-tiptap-editor",
    text: "Configure initial content, lifecycle callbacks, image upload, editor props, and SSR rendering.",
  },
  {
    title: "Content output",
    href: "/docs/api/content-output",
    text: "Save JSON as the editable source of truth and HTML for display, indexing, or integrations.",
  },
  {
    title: "SSR notes",
    href: "/docs/api/ssr",
    text: "Use client components and disable immediate rendering where Next.js hydration needs it.",
  },
];

const outputCards = [
  {
    title: "JSON documents",
    text: "Use editor.getJSON() or getEditorContent().json when the content will be edited again or rendered with RenderJSON.",
  },
  {
    title: "HTML output",
    text: "Use editor.getHTML(), getEditorContent().html, or the onSave payload when blogs, CMS pages, search, or external systems need markup.",
  },
  {
    title: "Image uploads",
    text: "Provide handleImageUpload.onUpload for production files, upload progress, limits, and cancellation support.",
  },
];

export default function RootPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05040b] text-white">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_12%,rgba(118,92,230,0.3),transparent_34%),radial-gradient(circle_at_84%_4%,rgba(82,96,214,0.24),transparent_32%),linear-gradient(135deg,#05040b_0%,#0d0a20_48%,#1c1745_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px] opacity-18" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col px-5 sm:px-8">
          <LandingHeader />

          <div className="flex flex-1 flex-col items-center gap-10 py-10 text-center lg:py-14">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-3 py-1 text-sm text-white/78 shadow-lg shadow-black/20 backdrop-blur">
                <Sparkles className="size-4 text-[#a99cff]" />A polished Tiptap
                editor UI for React
              </div>
              <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
                tiptap-<span className="text-[#8b5cf6]">react</span>-ui
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d9d7ff]">
                Build a modern rich text editor for React with a pre-built
                Tiptap UI, preview mode, JSON and HTML output, image uploads,
                and styling hooks for production apps.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/docs"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#17104b] transition hover:bg-[#f0edff]"
                >
                  <BookOpen className="size-4" />
                  Read the docs
                </Link>
                <a
                  href="https://github.com/knnthdn/tiptap-react-ui"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/18 bg-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/16"
                >
                  <GitBranch className="size-4" />
                  View source
                </a>
              </div>
            </div>

            {/* Editor Demo  */}
            <div className="w-full max-w-5xl">
              <LandingEditorsDemo />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_12%_12%,rgba(111,91,214,0.16),transparent_30%),linear-gradient(180deg,#111024_0%,#0b0918_100%)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a99cff]">
              Explore the docs
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Everything you need to install, render, save, and ship the editor.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#cbc7f6]">
              The documentation is organized around the real workflow: install
              the package, create an editor with the hook, render the UI, save
              content, and display stored documents safely in your app.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {docLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-lg border border-white/12 bg-white/[0.06] p-5 shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:border-[#8b7cff] hover:bg-white/[0.09]"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <ArrowRight className="size-4 text-[#a99cff] transition group-hover:translate-x-1" />
                </div>
                <p className="mt-4 text-sm leading-6 text-[#cbc7f6]">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[radial-gradient(circle_at_80%_0%,rgba(77,102,255,0.14),transparent_30%),linear-gradient(135deg,#16132e_0%,#0d0b1b_100%)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-18 sm:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a99cff]">
              Package surface
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal">
              A small public API around a complete editing experience.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-lg border border-white/12 bg-white/[0.06] p-6"
              >
                <feature.icon className="size-6 text-[#b7adff]" />
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#cbc7f6]">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_18%_10%,rgba(122,92,255,0.13),transparent_28%),linear-gradient(180deg,#100e22_0%,#070611_100%)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div>
            <Image
              src="/main-logo.png"
              alt="tiptap-react-ui logo color reference"
              width={72}
              height={72}
              className="rounded-lg"
            />
            <h2 className="mt-6 text-3xl font-semibold tracking-normal sm:text-4xl">
              Save content in the format your product needs.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#cbc7f6]">
              RichTextEditor can pass JSON and HTML through onSave, while the
              hook exposes getEditorContent for custom workflows. Use RenderJSON
              for Tiptap documents and RenderHTML for display-ready markup.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {outputCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-white/12 bg-white/[0.06] p-4"
                >
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#cbc7f6]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
