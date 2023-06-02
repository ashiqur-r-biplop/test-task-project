import { useEffect, useState } from "react";
import ShowListData from "../ShowListData/ShowListData";
import useDataFetching from "../../Hooks/FetchApi";
import useTitle from "../../Hooks/DaynamicTitle";
// import './ShowList.css';

const ShowList = () => {
  useTitle("Home")
  const [showsData, setShowsData] = useState([]);
  // const data  = fetchData()
  const { data } = useDataFetching();
  useEffect(() => {
    setShowsData(data);
  }, [data]);
  return (
    <div className="show-list-container">
      <h2 className="text-2xl text-center font-semibold my-2">Show List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {showsData?.map((showItem, i) => (
          <ShowListData key={i} showItem={showItem}></ShowListData>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
