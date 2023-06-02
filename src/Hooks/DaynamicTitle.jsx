import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Movies | ${title}`;
  }, [title]);
};

export default useTitle;