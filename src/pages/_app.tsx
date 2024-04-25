import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 ">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-lg ">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 p-4 text-center bg-white lg:col-span-9 rounded-lg">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
