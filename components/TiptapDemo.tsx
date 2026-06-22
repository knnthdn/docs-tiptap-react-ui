"use client";

import { useTiptapEditor, RichTextEditor } from "tiptap-react-ui";
import content from "../public/sample_content.json";

export default function TiptapDemo() {
  // const content = useMemo(() => {
  //   if (typeof window === "undefined") return;
  //   const savedContent = localStorage.getItem("editorContent-demo");
  //   return savedContent ? JSON.parse(savedContent) : "";
  // }, []);

  const { editor } = useTiptapEditor({
    content: content,
  });

  // function onSave() {
  //   // localStorage.setItem(
  //   //   "editorContent-demo",
  //   //   JSON.stringify(editor.getJSON()),
  //   // );

  // }

  return (
    <>
      <RichTextEditor editor={editor} theme="github" mode="dark" />
    </>
  );
}
