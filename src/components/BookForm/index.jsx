/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const BookFormComponent = ({ onSubmit, FormTitle, initialValues }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  
  useEffect(() => {
    if (initialValues) {
      setTitle(initialValues.title || "");
      setAuthor(initialValues.author || "");
    }
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      alert("Please fill in all fields");
      return;
    }
    onSubmit({ title, author });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <div className="mb-4">
        {FormTitle && <h1 className="text-3xl font-bold mb-4">{FormTitle}</h1>}
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          placeholder="Enter book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="author"
        >
          Author
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="author"
          placeholder="Enter author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default BookFormComponent;
