import React, { ReactNode } from "react";
import Header from "../ui/header";
import Footer from "../ui/footer";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
