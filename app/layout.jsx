import AuthProvider from "@/components/AuthProvider";
import "@/assets/styles/globals.css";
export const metadata = {
  title: "Property rental app",
  keywords: "rental, property, real estate",
  description: "Find the perfect rental property",
};
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
