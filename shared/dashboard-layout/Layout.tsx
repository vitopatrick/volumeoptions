import Header from "./header/Header";
import Sidebar from "./side-nav/Sidebar";

const Layout = ({ children }: any) => {
  return (
    // parent Div component
    <div className="h-screen w-screen flex md:overflow-hidden bg-bg text-text_main ">
      {/*  side bar*/}
      <Sidebar />
      {/* children */}
      <div className="flex-1 min-h-0 overflow-auto">
        <Header />
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
