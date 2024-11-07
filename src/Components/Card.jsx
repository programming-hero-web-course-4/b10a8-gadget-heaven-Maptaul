import { Link } from "react-router-dom";

const Card = ({ product }) => {
  if (!product) return null;

  const { product_id, product_title, product_image, price, description } =
    product;

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure className="bg-gray-100">
        <img
          className="h-60 w-60 p-5 rounded-md object-cover"
          src={product_image}
          alt=" Product Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: $ {price}</p>
        <div className="card-actions">
          <Link to={`/productdetails/${product_id}`}>
            <button className="btn text-purple-500 border-purple-500 rounded-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
