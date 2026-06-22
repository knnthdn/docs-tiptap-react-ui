import { ReactNode } from "react";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Logo from "../../components/Logo";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
  <Navbar
    logo={<Logo />}
    projectLink="https://github.com/knnthdn/tiptap-react-ui"
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
        docsRepositoryBase="https://github.com/knnthdn/docs-tiptap-react-ui/tree/main"
        footer={footer}
        sidebar={{
          toggleButton: false,
        }}
        feedback={{
          link: "https://github.com/knnthdn/tiptap-react-ui",
        }}
      >
        {children}
      </Layout>
    </div>
  );
}
