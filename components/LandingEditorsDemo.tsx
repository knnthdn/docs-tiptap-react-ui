"use client";

import { RichTextEditor, useTiptapEditor } from "tiptap-react-ui";
import content from "../public/sample_content.json";

export default function LandingEditorsDemo() {
  const { editor } = useTiptapEditor({
    content,
    immediatelyRender: false,
    className: "max-h-[70vh]",
  });

  if (!editor) {
    return <LandingEditorSkeleton />;
  }

  return <RichTextEditor editor={editor} theme="violet" enableModeToggle />;
}

function LandingEditorSkeleton() {
  return (
    <div className="w-full animate-pulse rounded-lg border bg-background">
      <div className="flex items-center justify-between border-b bg-muted/60 p-2">
        <div className="h-8 w-36 rounded-md bg-muted" />
        <div className="h-8 w-8 rounded-md bg-muted" />
      </div>

      <div className="flex flex-wrap gap-2 border-b bg-muted/50 p-2">
        {Array.from({ length: 14 }).map((_, index) => (
          <div key={index} className="h-8 w-8 rounded-md bg-muted" />
        ))}
      </div>

      <div className="min-h-80 space-y-4 p-6">
        <div className="h-6 w-2/3 rounded bg-muted" />
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-11/12 rounded bg-muted" />
        <div className="h-4 w-4/5 rounded bg-muted" />
      </div>

      <div className="flex items-center justify-between border-t bg-muted/60 px-3 py-2">
        <div className="h-4 w-32 rounded bg-muted" />
        <div className="h-4 w-24 rounded bg-muted" />
      </div>
    </div>
  );
}
