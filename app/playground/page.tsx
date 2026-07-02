"use client";

import { useEffect, useState } from "react";
import type { JSONContent } from "@tiptap/core";
import type { LucideIcon } from "lucide-react";
import { Braces, Eye, PencilLine } from "lucide-react";
import LandingHeader from "@/components/LandingHeader";
import { cn } from "@/lib/utils";
import {
  NotionEditor,
  RenderHTML,
  RenderJSON,
  RichTextEditor,
  useTiptapEditor,
} from "tiptap-react-ui";
import content from "../../public/sample_content.json";

type EditorKind = "default" | "notion";
type ViewKind = "editor" | "preview";
type PreviewKind = "json" | "html";

export default function DemoPage() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#05040b] text-white lg:h-dvh lg:overflow-hidden">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_24%_12%,rgba(118,92,230,0.3),transparent_34%),radial-gradient(circle_at_84%_4%,rgba(82,96,214,0.24),transparent_32%),linear-gradient(135deg,#05040b_0%,#0d0a20_48%,#1c1745_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px] opacity-18" />

      <div className="relative mx-auto flex min-h-dvh max-w-[1600px] flex-col px-3 sm:px-6 lg:h-full lg:min-h-0 lg:px-8">
        <div className="playground-site-header">
          <LandingHeader />
        </div>

        <section className="mx-auto flex min-h-0 w-full max-w-7xl flex-1 pb-3 sm:pb-6">
          <Editor />
        </section>
      </div>
    </main>
  );
}

function Editor() {
  const [view, setView] = useState<ViewKind>("editor");
  const [editorKind, setEditorKind] = useState<EditorKind>("default");
  const [previewKind, setPreviewKind] = useState<PreviewKind>("json");

  const { editor: richTextEditor } = useTiptapEditor({
    content,
    immediatelyRender: false,
    className: "min-h-0 max-h-full overflow-y-auto p-4 sm:p-6",
  });

  const { editor: notionEditor } = useTiptapEditor({
    content,
    immediatelyRender: false,
    placeholder: "Write, type '/' for commands",
  });

  const activeEditor = editorKind === "notion" ? notionEditor : richTextEditor;
  const [previewContent, setPreviewContent] = useState<{
    html: string;
    json: JSONContent | null;
  }>({
    html: "",
    json: null,
  });

  useEffect(() => {
    if (!activeEditor) return;

    const syncPreviewContent = () => {
      setPreviewContent({
        html: activeEditor.getHTML(),
        json: activeEditor.getJSON(),
      });
    };

    syncPreviewContent();
    activeEditor.on("update", syncPreviewContent);

    return () => {
      activeEditor.off("update", syncPreviewContent);
    };
  }, [activeEditor]);

  return (
    <section className="flex h-[calc(100dvh-6rem)] min-h-[600px] w-full flex-1 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111113] shadow-2xl shadow-black/30 lg:h-auto lg:min-h-0">
      <header className="flex shrink-0 flex-col gap-2 border-b border-white/8 bg-[#151517] p-2 sm:flex-row sm:items-center sm:justify-between sm:px-3">
        <div className="flex items-center gap-2">
          <span className="hidden px-2 text-sm font-semibold text-white/85 lg:block">
            Playground
          </span>
          <ControlGroup className="flex-1 sm:flex-none">
            <ControlButton
              active={view === "editor"}
              icon={PencilLine}
              label="Editor"
              onClick={() => setView("editor")}
            />
            <ControlButton
              active={view === "preview"}
              icon={Eye}
              label="Preview"
              onClick={() => setView("preview")}
            />
          </ControlGroup>
        </div>

        {view === "editor" ? (
          <ControlGroup>
            <ControlButton
              active={editorKind === "default"}
              label="Default"
              onClick={() => setEditorKind("default")}
            />
            <ControlButton
              active={editorKind === "notion"}
              label="Notion"
              onClick={() => setEditorKind("notion")}
            />
          </ControlGroup>
        ) : (
          <ControlGroup>
            <ControlButton
              active={previewKind === "json"}
              label="JSON"
              onClick={() => setPreviewKind("json")}
            />
            <ControlButton
              active={previewKind === "html"}
              label="HTML"
              onClick={() => setPreviewKind("html")}
            />
          </ControlGroup>
        )}
      </header>

      <div className="min-h-0 flex-1 overflow-hidden bg-[#0c0c0e]">
        {view === "editor" && editorKind === "default" && (
          <RichTextEditor
            editor={richTextEditor}
            mode="dark"
            wrapperClassName="h-full min-h-0 border-0 rounded-none"
            editorClassName="h-full min-h-0"
            theme="violet"
          />
        )}

        {view === "editor" && editorKind === "notion" && (
          <div className="h-full overflow-auto">
            <NotionEditor editor={notionEditor} mode="dark" />
          </div>
        )}

        {view === "preview" && (
          <div className="h-full overflow-auto">
            <div className="mx-auto min-h-full w-full max-w-5xl px-4 py-6 sm:px-8 sm:py-10">
              <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/35">
                <Braces className="size-3.5" />
                {previewKind === "json" ? "JSON output" : "HTML output"}
              </div>

              {previewKind === "json" && previewContent.json && (
                <RenderJSON
                  content={previewContent.json}
                  immediatelyRender={false}
                  mode="dark"
                />
              )}

              {previewKind === "html" && (
                <RenderHTML content={previewContent.html} mode="dark" />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ControlGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-9 rounded-lg bg-black/25 p-1 ring-1 ring-white/8",
        className,
      )}
    >
      {children}
    </div>
  );
}

function ControlButton({
  active,
  icon: Icon,
  label,
  onClick,
}: {
  active: boolean;
  icon?: LucideIcon;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex min-w-20 flex-1 items-center justify-center gap-2 rounded-md px-3 text-xs font-medium text-white/50 transition-colors hover:text-white sm:flex-none",
        active && "bg-white/10 text-white shadow-sm",
      )}
    >
      {Icon && <Icon className="size-3.5" />}
      {label}
    </button>
  );
}
