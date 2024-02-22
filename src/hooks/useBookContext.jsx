import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const useBookContext = () => {
  return useContext(BookContext);
};

export default useBookContext;
