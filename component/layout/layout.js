import Header from "component/header/header";
import Footer from "component/footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
