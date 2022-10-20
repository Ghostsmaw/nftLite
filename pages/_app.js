import "../styles/globals.css";
import Script from "next/script";

import { ThemeProvider } from "next-themes";
import { NavBar, Footer } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <NavBar />
        <div className="pt-65">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>

      <Script
        src="https://kit.fontawesome.com/50c6a587a3.js"
        crossorigin="anonymous"
      ></Script>
    </ThemeProvider>
  );
}

export default MyApp;
