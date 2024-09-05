import Navbar from "./ui/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="text-white text-center bg-blue-800 p-2">
        © RTP Yüksek Siteler, Tüm hakları saklıdır.
      </footer>
    </>
  );
};

export default Layout;
