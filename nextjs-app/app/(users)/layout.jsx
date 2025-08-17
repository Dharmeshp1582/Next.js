import Navigation from "@/components/Navigation"
import "../globals.css";
   
export default function RootLayout({children}){
  return (
    <html>
      <body>
      {/* <h1>Hello from RootLayout</h1> */}
      <Navigation />
        {children}
      </body>
    </html>
  );
}