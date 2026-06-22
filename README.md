# tiptap-react-ui

A modern React UI library built on [Tiptap](https://tiptap.dev) for rich text editing, Notion-like writing surfaces, and read-only content rendering.

## Features

- **Beautiful editor UI** - Pre-built `RichTextEditor` and `NotionEditor` components.
- **No app-level UI setup required** - Works without Tailwind CSS or shadcn/ui in the consuming app.
- **Built-in styles** - Import `tiptap-react-ui/style.css` once in your app entry or root layout.
- **TypeScript ready** - Public types for editor props, save payloads, themes, and modes.
- **Tiptap powered** - Uses a preconfigured Tiptap extension set for common rich text workflows.
- **Content rendering** - Render saved editor JSON with `RenderJSON` or saved HTML with `RenderHTML`.

## Quick Start

```bash
npm install tiptap-react-ui @tiptap/core@3 @tiptap/pm@3 @tiptap/react@3
```

Import the stylesheet once in your app entry, root layout, or global CSS entry.

```tsx
import "tiptap-react-ui/style.css";
```

```tsx
"use client";

import { RichTextEditor, useTiptapEditor } from "tiptap-react-ui";

export default function App() {
  const { editor, isEditorLoading } = useTiptapEditor();

  if (isEditorLoading) return null;

  return <RichTextEditor editor={editor} enablePreview />;
}
```

## Documentation

Visit the [official documentation](https://docs-tiptap-react-ui.vercel.app) for detailed guides, examples, and API reference.
