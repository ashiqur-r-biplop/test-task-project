import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ShowListData = ({ showItem }) => {
  // eslint-disable-next-line react/prop-types, no-unsafe-optional-chaining
  const { image, id, name, language } = showItem?.show;
  // eslint-disable-next-line react/prop-types
  console.log(showItem?.show);
  return (
    <div className="card w-96 bg-base-100 shadow-xl px-3 py-4 rounded my-3 mx-auto">
      <div className="flex justify-center">
        <img
          // eslint-disable-next-line react/prop-types
          src={image?.medium}
          alt="Shoes"
        />
      </div>
      <div className="card-body relative">
        <h2 className="card-title absolute bg-white px-5 py-3 shadow-2xl text-black -top-7 left-10">{name}</h2>
        <p className="my-5">Language: {language}</p>
        <div className="card-actions justify-start">
          <Link to={`/show/${id}`}  className="btn btn-accent">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowListData;
