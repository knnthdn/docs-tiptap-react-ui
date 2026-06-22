"use client";

import { useEffect, useState } from "react";
import type { JSONContent } from "@tiptap/core";
import LandingHeader from "@/components/LandingHeader";
import {
  NotionEditor,
  RenderHTML,
  RenderJSON,
  RichTextEditor,
  useTiptapEditor,
} from "tiptap-react-ui";
import content from "../../public/sample_content.json";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

type EditorKind = "default" | "notion";

export default function DemoPage() {
  return (
    <main className="h-screen overflow-hidden bg-[#05040b] text-white">
      <section className="relative h-full border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_12%,rgba(118,92,230,0.3),transparent_34%),radial-gradient(circle_at_84%_4%,rgba(82,96,214,0.24),transparent_32%),linear-gradient(135deg,#05040b_0%,#0d0a20_48%,#1c1745_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[64px_64px] opacity-18" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col px-5 sm:px-8">
          <LandingHeader />

          <section className="flex min-h-0 flex-1 py-4">
            <Editor />
          </section>
        </div>
      </section>
    </main>
  );
}

function Editor() {
  const [editorKind, setEditorKind] = useState<EditorKind>("default");

  const { editor: richTextEditor } = useTiptapEditor({
    content,
    className: "min-h-0 max-h-full overflow-y-auto p-6",
  });

  const { editor: notionEditor } = useTiptapEditor({
    content,
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
    <Tabs
      defaultValue="editor"
      className="flex h-full min-h-0 w-full overflow-hidden"
    >
      <TabsList className="h-11 w-full shrink-0 rounded-md border border-white/12 bg-white/[0.08] p-1 text-white/65 shadow-lg shadow-black/20 backdrop-blur">
        <TabsTrigger
          value="editor"
          className="rounded-sm text-white/68 transition hover:bg-white/[0.08] hover:text-white data-active:border-white/18 data-active:bg-[#8b5cf6]/28 data-active:text-white data-active:shadow-sm data-active:shadow-[#8b5cf6]/20 dark:data-active:border-white/18 dark:data-active:bg-[#8b5cf6]/28 dark:data-active:text-white"
        >
          Editor
        </TabsTrigger>
        <TabsTrigger
          value="preview"
          className="rounded-sm text-white/68 transition hover:bg-white/[0.08] hover:text-white data-active:border-white/18 data-active:bg-[#8b5cf6]/28 data-active:text-white data-active:shadow-sm data-active:shadow-[#8b5cf6]/20 dark:data-active:border-white/18 dark:data-active:bg-[#8b5cf6]/28 dark:data-active:text-white"
        >
          Preview
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value="editor"
        className="flex h-full min-h-0 w-full flex-col overflow-hidden"
      >
        <Tabs
          value={editorKind}
          onValueChange={(value) => setEditorKind(value as EditorKind)}
          className="flex h-full min-h-0 w-full overflow-hidden"
        >
          <TabsList className="ml-auto h-8 w-fit shrink-0 rounded-md border border-white/12 bg-white/[0.08] p-0.5 text-xs text-white/65 shadow-lg shadow-black/20 backdrop-blur">
            <TriggerButton value="default" label="Default" />
            <TriggerButton value="notion" label="Notion" />
          </TabsList>

          <TabsContent
            value="default"
            className="h-full min-h-0 w-full overflow-hidden"
          >
            <RichTextEditor
              editor={richTextEditor}
              mode="dark"
              wrapperClassName="h-full min-h-0"
              editorClassName="h-full min-h-0"
              theme="violet"
            />
          </TabsContent>

          <TabsContent
            value="notion"
            className="h-full min-h-0 w-full overflow-auto"
          >
            <NotionEditor editor={notionEditor} mode="dark" />
          </TabsContent>
        </Tabs>
      </TabsContent>

      <TabsContent
        value="preview"
        className="flex h-full min-h-0 w-full flex-col gap-3 overflow-auto"
      >
        <Tabs defaultValue="json" className="flex min-h-full w-full px-1">
          <TabsList className="ml-auto h-8 w-fit shrink-0 rounded-md border border-white/12 bg-white/[0.08] p-0.5 text-xs text-white/65 shadow-lg shadow-black/20 backdrop-blur">
            <TriggerButton value="json" label="JSON" />
            <TriggerButton value="html" label="HTML" />
          </TabsList>

          <TabsContent value="json" className="w-full">
            {previewContent.json && (
              <RenderJSON
                content={previewContent.json}
                immediatelyRender={false}
                className="px-2 pb-10"
                mode="dark"
              />
            )}
          </TabsContent>

          <TabsContent value="html" className="w-full text-center">
            <RenderHTML
              content={previewContent.html}
              className="px-2 pb-10"
              mode="dark"
            />
          </TabsContent>
        </Tabs>
      </TabsContent>
    </Tabs>
  );
}

function TriggerButton({ value, label }: { value: string; label: string }) {
  return (
    <TabsTrigger
      value={value}
      className="h-7 min-w-16 rounded-sm px-3 text-xs text-white/68 transition hover:bg-white/[0.08] hover:text-white data-active:border-white/18 data-active:bg-[#8b5cf6]/28 data-active:text-white data-active:shadow-sm data-active:shadow-[#8b5cf6]/20 dark:data-active:border-white/18 dark:data-active:bg-[#8b5cf6]/28 dark:data-active:text-white"
    >
      {label}
    </TabsTrigger>
  );
}
