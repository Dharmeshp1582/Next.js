import "./globals.css";
import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Dharmesh Patel | Learn Web Development",
    template: "%s | Dharmesh Patel",
  },
  description:
    "Free tutorials on React.js, Next.js, and web development by Dharmesh Patel.",
  keywords: ["React", "Next.js", "Web Development", "Dharmesh Patel"],
  icons: {
    icon: "/images/kody.png",
  },
  metadataBase: new URL("https://thapatechical.com"),
  openGraph: {
    title: "Dharmesh Patel",
    description: "Join the best web dev tutorials!",
    url: "https://yourdomain.com",
    siteName: "Dharmesh Patel",
    images: [
      {
        url: "/og-image.png",
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
    creator: "@DharmeshPatel",
    images: ["/og-image.png"],
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${workSans.variable} `}>
        {children}
      </body>
    </html>
  );
}
