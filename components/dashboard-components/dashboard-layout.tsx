import React from "react";

const DashboardLayout = () => {
  return (
    <div className="md:grid grid-cols-3 gap-4 mt-4">
      <div className="font-main p-3 my-4 md:my-0 bg-red-200">
        <h4>main account</h4>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
        corrupti, ab repellat, perferendis alias ea molestiae mollitia non modi
        aspernatur doloremque nesciunt explicabo officia at vero adipisci iusto
        eius neque sunt expedita ad? Aliquid modi iste fugiat vel, dolore sequi!
      </div>
      <div className="font-main p-3 my-4 md:my-0 bg-teal-200">
        <h4>trading account</h4>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
        corrupti, ab repellat, perferendis alias ea molestiae mollitia non modi
        aspernatur doloremque nesciunt explicabo officia at vero adipisci iusto
        eius neque sunt expedita ad? Aliquid modi iste fugiat vel, dolore sequi!
      </div>
      <div className="font-main p-3 bg-yellow-200 my-4 md:my-0 col-start-1 col-end-3">
        <h4>chart</h4>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero saepe
        voluptatibus esse officia dolor reiciendis eaque dignissimos totam
        voluptas consequuntur quis, placeat quos nisi, repellat suscipit
        perferendis sint. Eos totam corporis impedit fugiat aut, dolor odio
        numquam odit recusandae quia.
      </div>
      <div className="font-main p-3 bg-orange-300 my-4 md:my-0 col-start-1 col-end-3">
        <h4>hotcoins</h4>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
        corrupti, ab repellat, perferendis alias ea molestiae mollitia non modi
        aspernatur doloremque nesciunt explicabo officia at vero adipisci iusto
        eius neque sunt expedita ad? Aliquid modi iste fugiat vel, dolore sequi!
      </div>
      <div className="font-main p-3 bg-blue-500 my-4 md:my-0 col-start-3 col-end-4 row-start-1 row-end-4">
        <h4>transactions</h4>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
        corrupti, ab repellat, perferendis alias ea molestiae mollitia non modi
        aspernatur doloremque nesciunt explicabo officia at vero adipisci iusto
        eius neque sunt expedita ad? Aliquid modi iste fugiat vel, dolore sequi!
      </div>
    </div>
  );
};

export default DashboardLayout;
