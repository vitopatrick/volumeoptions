import Header from "./header/Header";
import Sidebar from "./side-nav/Sidebar";

const Layout = ({ children }: any) => {
  return (
    // parent Div component
    <div className="h-screen w-screen flex md:overflow-hidden ">
      {/*  side bar*/}
      <Sidebar />
      {/* children */}
      <div className="flex-1 p-4 bg-red-500">
        <Header />
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
