import Navbar from "@/components/Navbar";
import { Fragment, ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <section>
          <h2 className="font-bold text-2xl">Serokom Footer</h2>
        </section>
      </footer>
    </Fragment>
  );
};

export default CommonLayout;
