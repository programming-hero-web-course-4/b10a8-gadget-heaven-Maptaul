const Card = ({ product }) => {
  const { product_title, product_image, price, description } = product || {};
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co.com/FhvtQ6R/1680869474654-MLTPCC0004-1.png"
            alt="Products Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dell XPS 13</h2>
          <p>Price: 99.99k</p>
          <div className="card-actions justify-normal">
            <button className="btn text-purple-500 border-purple-500  rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co.com/FhvtQ6R/1680869474654-MLTPCC0004-1.png"
            alt="Products Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dell XPS 13</h2>
          <p>Price: 99.99k</p>
          <div className="card-actions justify-normal">
            <button className="btn text-purple-500 border-purple-500  rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co.com/FhvtQ6R/1680869474654-MLTPCC0004-1.png"
            alt="Products Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dell XPS 13</h2>
          <p>Price: 99.99k</p>
          <div className="card-actions justify-normal">
            <button className="btn text-purple-500 border-purple-500  rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co.com/FhvtQ6R/1680869474654-MLTPCC0004-1.png"
            alt="Products Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dell XPS 13</h2>
          <p>Price: 99.99k</p>
          <div className="card-actions justify-normal">
            <button className="btn text-purple-500 border-purple-500  rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co.com/FhvtQ6R/1680869474654-MLTPCC0004-1.png"
            alt="Products Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dell XPS 13</h2>
          <p>Price: 99.99k</p>
          <div className="card-actions justify-normal">
            <button className="btn text-purple-500 border-purple-500  rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
