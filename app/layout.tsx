import Footer from "@components/Footer";
import Header from "@components/Header";

import "./globals.css";

const Layout = ({ children }: any) => (
  <html lang="en">
    <body>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </body>
  </html>
);

export default Layout;
