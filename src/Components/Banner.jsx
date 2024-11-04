import banner from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="w-2/4 h-96 relative z-10 mx-auto -mt-16 mb-10 flex justify-center items-center rounded-xl p-3 bg-transparent backdrop-blur-xl ">
      <img
        className="w-full h-full rounded-xl items-center justify-center"
        src={banner}
        alt="Banner Image"
      />
    </div>
  );
};

export default Banner;
