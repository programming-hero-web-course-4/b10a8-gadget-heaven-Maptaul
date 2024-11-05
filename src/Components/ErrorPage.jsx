const ErrorPage = () => {
  return (
    <div className="justify-center items-center text-center py-12 space-y-10">
      <h1 className="text-7xl justify-center items-center text-center">
        Page not Found
      </h1>
      <p>Error Status : 404 😲 </p>
      <img
        className="w-[300px] mx-auto"
        src="https://i.ibb.co.com/jHMGZy4/danger-symbol-labels-danger-warning-labels-p1421-47642-zoom.png"
        alt=""
      />
    </div>
  );
};

export default ErrorPage;
