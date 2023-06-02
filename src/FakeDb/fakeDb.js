// use local storage to manage cart data
const addToDb = (bookingsMovie) => {
  const detailsInfo = JSON.parse(localStorage.getItem("movie-collection"));
  let detail;
  if (detailsInfo) {
    const previousStorage = detailsInfo.find((d) => d.id === bookingsMovie.id);
    if (previousStorage) {
      return alert("already added");
    } else {
      const currentStorage = [...detailsInfo, bookingsMovie];
      localStorage.setItem("movie-collection", JSON.stringify(currentStorage));
    }
  } else {
    detail = [bookingsMovie];
    localStorage.setItem("movie-collection", JSON.stringify(detail));
  }
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("movie-collection", JSON.stringify(shoppingCart));
  }
};

const getDb = () => {
  const getLocalStorageData = JSON.parse(localStorage.getItem("movie-collection"));
  return getLocalStorageData;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("movie-collection");
};

export { addToDb, removeFromDb, getDb, deleteShoppingCart };
