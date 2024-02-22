import { BookFormComponent } from "../../components";
import { useParams, useNavigate } from "react-router-dom";
import { useBookContext } from "../../hooks";

function EditBookPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { books, editBook } = useBookContext();

  const bookId = parseInt(id);
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  const handleEditBook = (updatedBook) => {
    editBook(bookId, updatedBook);
    navigate("/dashboard");
  };

  return (
    <>
      <BookFormComponent
        FormTitle={"Edit Book"}
        initialValues={book}
        onSubmit={handleEditBook}
      />
    </>
  );
}

export default EditBookPage;
