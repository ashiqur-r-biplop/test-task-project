import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDataFetching from "../../Hooks/FetchApi";
import FormModal from "../FormModal/FormModal";
import useTitle from "../../Hooks/DaynamicTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ShowList = () => {
  const navigate = useNavigate();
  const [showsData, setShowsData] = useState({});
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const { data } = useDataFetching();
  useEffect(() => {
    const SingleShow = data?.find((movie) => movie?.show?.id === parseInt(id));
    console.log(SingleShow?.show);
    setShowsData(SingleShow?.show);

    const regex = /(<([^>]+)>)/gi;
    setDescription(SingleShow?.show?.summary?.replace(regex, ""));
  }, [data, id]);
  console.log(showsData);
  useTitle(`Details | ${showsData?.name}`);
  return (
    <div className="container mx-auto">
      <div className="text-center mt-4">
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            Back Now
          </button>
        </div>
      <div className="hero md:h-[90vh] mx-auto flex justify-center items-center py-4">
        
        <div className="md:flex md:flex-row-reverse justify-center items-center px-3 ">
          <div className="md:w-1/2 flex md:justify-end justify-center">
            <img
              src={showsData?.image?.medium}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 mx-auto flex flex-col justify-center">
            <h1 className="text-5xl font-bold">{showsData?.name}</h1>
            <p className="py-6">{description}</p>
            <FormModal showsData={showsData}></FormModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowList;
