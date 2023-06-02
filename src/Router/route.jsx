import { createBrowserRouter } from "react-router-dom";
import ShowList from "../Components/ShowList/ShowList";
import ShowSummary from "../Components/ShowSummary/ShowSummary";
import MovieBooking from "../Components/MovieBooking/MovieBooking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowList></ShowList>,
  },
  {
    path: "/show/:id",
    element: <ShowSummary></ShowSummary>
  },
  {
    path: "/show/:showId/book",
    element: <MovieBooking></MovieBooking>
  },
]);
