
import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
export const metadata : Metadata = {
  title : "Collates"
}

export default function Home() {
  return (
    <section className="py-10 px-14 flex flex-col justify-center">
      <Navbar/>
      <div className="mt-20">
        <Hero />
      </div>
    </section>
  );
}
