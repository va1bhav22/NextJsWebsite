import Footer from "./Footer";
import Navabar from "./Navabar";

const Layout = ({ children }) => {
  return (
    <>
      <Navabar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
