import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-col justify-between min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="grow max-w-7xl mx-auto px-4">{children}</main>
      <footer>
        <section>
          <h2 className="font-bold text-2xl">Serokom Footer</h2>
        </section>
      </footer>
    </section>
  );
};

export default CommonLayout;
