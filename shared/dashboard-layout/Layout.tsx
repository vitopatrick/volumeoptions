import Header from "./header/Header";
import Sidebar from "./side-nav/Sidebar";

const Layout = ({ children }: any) => {
  return (
    // parent Div component
    <div className="h-screen w-screen flex md:overflow-hidden ">
      {/*  side bar*/}
      <Sidebar />
      {/* children */}
      <div className="flex-1 flex-col flex p-4">
        <Header />
        <div className=" min-h-0 overflow-auto flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
