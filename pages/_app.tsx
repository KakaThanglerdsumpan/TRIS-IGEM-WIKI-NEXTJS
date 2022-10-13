import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Bottombar from "../components/Bottombar";
import type { AppProps } from "next/app";
import React from "react";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Bottombar />
    </>
  );
}

export default MyApp;
