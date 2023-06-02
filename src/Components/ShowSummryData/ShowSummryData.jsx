import { useEffect, useState } from "react";
import FormModal from "../FormModal/FormModal";
import useTitle from "../../Hooks/DaynamicTitle";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ShowSummryData = ({ data }) => {
  const [description, setDescription] = useState("");
  // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types
  const { image, id, name, summary } = data?.show;
  console.log(summary.slice(">"));
  console.log(image);
  useEffect(() => {
    const regex = /(<([^>]+)>)/gi;
    setDescription(summary.replace(regex, ""));
  }, [summary]);

  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen mx-auto flex justify-center items-center py-4">
      
        <div className="md:flex md:flex-row-reverse justify-center items-center px-3 ">
          <div className="md:w-1/2 flex md:justify-end justify-center">
            <img src={image?.medium} className="rounded-lg shadow-2xl" />
          </div>
          <div className="md:w-1/2 mx-auto flex flex-col justify-center">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{description}</p>
            <FormModal
              // eslint-disable-next-line react/prop-types
              movie={data?.show}
            ></FormModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSummryData;
