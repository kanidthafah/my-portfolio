import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransitions from "@/components/PageTransitions";
import EffectTransition from "@/components/EffectTransition";

export const poppins_init = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Kanidtha's portfolio",
  description: "my portfolio by Kanidtha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins_init.className}>
        <Header />
        <EffectTransition />
        <PageTransitions>{children}</PageTransitions>
      </body>
    </html>
  );
}
