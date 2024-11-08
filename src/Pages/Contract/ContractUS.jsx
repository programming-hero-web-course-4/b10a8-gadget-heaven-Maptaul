import React from "react";
import Headings from "../../Components/Headings";

const ContractUS = () => {
  return (
    <div>
      <Headings tittle={"Get Touch With us"} />
      <p className="mb-10 text-center">
        if you have any questions or need assistance, please don't hesitate to
        contact us.
      </p>
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
          Email: maptaul912@gmail.com
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
          Phone : +8801846035436
        </div>
      </div>
    </div>
  );
};

export default ContractUS;
