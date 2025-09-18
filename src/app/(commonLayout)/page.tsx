"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/dashboard");
  };

  return (
    <section className="h-screen grid place-items-center">
      <div className="text-center">
        <h2 className="font-semibold text-2xl mb-3 italic">
          Welcome to Next Js Home Page
        </h2>
        <button onClick={handleNavigation}>Dashboard</button>
      </div>
    </section>
  );
};

export default Home;
