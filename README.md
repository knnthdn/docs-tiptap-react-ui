# tiptap-react-ui

A modern, customizable React UI library built on [Tiptap](https://tiptap.dev) - a headless, framework-agnostic rich text editor.

## Features

- 🎨 **Beautiful Components** - Pre-built UI components for rich text editing
- 🛠️ **Fully Customizable** - Tailwind CSS powered, extend with your own styles
- ⚡ **Lightweight** - Minimal dependencies, optimized for performance
- 📱 **Responsive** - Works seamlessly on desktop and mobile
- 🎯 **TypeScript Ready** - Full type safety out of the box
- 🔌 **Tiptap Powered** - Access to all Tiptap extensions and features

## Quick Start

**Note**: Before installing **tiptap-react-ui**, make sure your project has:

- ✅ [Tailwind CSS](https://tailwindcss.com/docs/installation) installed and configured
- ✅ [shadcn/ui](https://ui.shadcn.com/create) initialized in your project

```bash
npm install tiptap-react-ui @tiptap/core@latest @tiptap/pm@latest @tiptap/react@latest @tiptap/starter-kit@latest
```

```tsx
import { RichTextEditor } from "tiptap-react-ui";
import "tiptap-react-ui/style.css";

export default function App() {
  const { editor } = useTiptapEditor();

  return <RichTextEditor enablePreview />;
}
```

## Documentation

Visit the [official documentation](https://docs-tiptap-react-ui.vercel.app) for detailed guides, examples, and API reference.

**tiptap-react-ui** - A React UI library for the Tiptap editor.
