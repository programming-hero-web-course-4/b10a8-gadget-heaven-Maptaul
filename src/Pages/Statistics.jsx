import Chart from "../Components/Chart";
import Headings from "../Components/Headings";

const Statistics = () => {
  return (
    <div>
      <div className="-mt-12  ">
        <div className="bg-[#9538E2] text-white items-center mb-10 py-8 mx-auto">
          <Headings tittle={"Statistics"} />
          <p className="mb-10 text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
        </div>
      </div>
      <div className="  bg-gray-100 p-4 -mt-10">
        <h1 className="text-3xl">Statistics</h1>
      </div>
      <div className="bg-gray-100 py-4 ">
        <div className="  mb-5 container mx-auto  px-4 space-y-5">
          <div className="flex items-center bg-white justify-between rounded-lg border p-3">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
