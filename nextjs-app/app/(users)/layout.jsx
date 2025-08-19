import Navigation from "@/components/Navigation"
import "../globals.css";
import {Roboto} from "next/font/google";
import { Work_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Learn Web Development",
    template: "%s | Dharmesh Patel",
  },
  description:
    "Free tutorials on React.js, Next.js, and web development by Dharmesh Patel.",
  keywords: ["React", "Next.js", "Web Development", "Dharmesh Patel"],
  icons: {
    icon: "/public/next.svg",
  },
  metadataBase: new URL("https://dharmesh-patel.vercel.app/"),
  openGraph: {
    title: "Dharmesh Patel",
    description: "Join the best web dev tutorials!",
    url: "https://dharmesh-patel.vercel.app/",
    siteName: "Dharmesh Patel",
    images: [
      {
        url: "/user.png",
        width: 1200,
        height: 630,
        alt: "Dharmesh Patel Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharmesh Patel",
    description: "Learn Web Dev from scratch with Dharmesh Patel!",
    creator: "@Dharmeshpatel",
    images: ["/og-image.png"],
  },
};


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