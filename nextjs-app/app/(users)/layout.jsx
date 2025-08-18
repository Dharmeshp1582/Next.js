import Navigation from "@/components/Navigation"
import "../globals.css";
import {Roboto} from "next/font/google";
import { Work_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable:"--font-roboto",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function RootLayout({children}){
  return (
    <html>
      {/* <body className={workSans.className}> for define only one fonts  */}
      <body className={`${roboto.variable} ${workSans.variable} `}>
      {/* <h1>Hello from RootLayout</h1> */}
      <Navigation />
        {children}
      </body>
    </html>
  );
}