import Header from "../../src/components/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
