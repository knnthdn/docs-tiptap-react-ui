"use client";

import { useMemo } from "react";

import { useTiptapEditor, RichTextEditor } from "tiptap-react-ui";
import "tiptap-react-ui/style.css";

export default function TiptapDemo() {
  const content = useMemo(() => {
    if (typeof window === "undefined") return;
    const savedContent = localStorage.getItem("editorContent-demo");
    return savedContent ? JSON.parse(savedContent) : "";
  }, []);

  const { editor } = useTiptapEditor({
    content: content,
    immediatelyRender: false,
    className: "max-h-[80vh]",
  });

  // function onSave() {
  //   // localStorage.setItem(
  //   //   "editorContent-demo",
  //   //   JSON.stringify(editor.getJSON()),
  //   // );

  // }

  return (
    <>
      <RichTextEditor
        editor={editor}
        immediatelyRenderPreview={true}
        enablePreview={true}
      />
    </>
  );
}
