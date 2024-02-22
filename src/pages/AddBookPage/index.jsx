import { BookFormComponent } from "../../components";
import { useNavigate } from "react-router-dom";
import { useBookContext } from "../../hooks";

function AddBookPage() {
  const navigate = useNavigate();
  const { addBook } = useBookContext();

  const handleAddBook = (book) => {
    addBook(book);
    navigate("/dashboard");
  };

  return (
    <>
      <BookFormComponent FormTitle={"Add Book"} onSubmit={handleAddBook} />
    </>
  );
}

export default AddBookPage;
