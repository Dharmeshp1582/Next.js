export default function AboutLayout({children}){
  return (
    <html>
      <body>
      <h1>Hello from AboutLayout</h1>
      {/*  Layout page are shown on all the pages of About section */}
        {children}
      </body>
    </html>
  );
}