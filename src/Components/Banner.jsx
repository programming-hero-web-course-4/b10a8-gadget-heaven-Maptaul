import banner from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="w-2/4 h-96 relative z-10 mx-auto -mt-16 mb-10 flex justify-center items-center border-8 border-gray-300 rounded-lg ">
      <img
        className="w-full h-full  items-center justify-center"
        src={banner}
        alt="Banner Image"
      />
    </div>
  );
};

export default Banner;
