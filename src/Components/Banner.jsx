import banner from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="join grid mb-20">
      <div className="bg-[#9538E2] -mt-12">
        <div className="text-center mb-32 py-10">
          <h1 className="text-4xl font-bold text-white mb-10">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-xl text-white mb-10">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <button className="btn rounded-full text-[#9538E2]">
            <a href="/dashboard">Shop Now</a>
          </button>
        </div>
      </div>
      <div className="w-2/4 h-96 relative z-10 mx-auto -mt-20 -mb-10 flex justify-center items-center rounded-xl p-3 bg-transparent backdrop-blur-xl ">
        <img
          className="w-full h-full rounded-xl items-center justify-center"
          src={banner}
          alt="Banner Image"
        />
      </div>
    </div>
  );
};

export default Banner;
