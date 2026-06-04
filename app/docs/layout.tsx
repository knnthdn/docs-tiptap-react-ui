import { ReactNode } from "react";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import Image from "next/image";
import "nextra-theme-docs/style.css";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const LogoComponent = () => (
  <div className="flex items-center gap-2">
    <Image
      src="/docs-logo.png"
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

const navbar = (
  <Navbar
    logo={<LogoComponent />}
    projectLink="https://github.com/placeholder/tiptap-react-ui"
  />
);
const footer = (
  <Footer>
    <p>
      MIT {new Date().getFullYear()} © tiptap-react-ui. All rights reserved.
    </p>
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="docs-font 2xl:max-w-[80vw] 2xl:mx-auto">
      <Layout
        navbar={navbar}
        pageMap={await getPageMap()}
        docsRepositoryBase="https://test.com"
        footer={footer}
        sidebar={{
          toggleButton: false,
        }}
        nextThemes={{
          defaultTheme: "dark",
        }}
      >
        {children}
      </Layout>
    </div>
  );
}
