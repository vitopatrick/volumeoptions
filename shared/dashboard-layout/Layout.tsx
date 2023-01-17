const Layout = ({ children }: any) => {
  return (
    <>
      {/* parent div element */}
      <div className="h-screen w-screen bg-slate-900">
        {/* header component */}
        <div></div>
        {/* parent flex container for content and sidebar */}
        <div>
          {/* side bar */}
          <div>
            <h4 className="font-sec font-light text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              velit eveniet ut harum nesciunt optio eos, libero recusandae nam
              quod saepe totam ipsa quasi dicta maiores ab, cum dolorem
              explicabo.
            </h4>
          </div>
          {/* main component */}
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
