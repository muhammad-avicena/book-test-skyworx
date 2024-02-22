/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { Link } from "react-router-dom";

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
    <>
      <form
        onSubmit={handleSubmit}
        className="h-7 max-w-sm mx-auto flex flex-col min-h-screen justify-center rounded-lg p-6"
      >
        <div className="mb-4 w-full">
          {FormTitle && (
            <h1 className="text-3xl text-white font-bold mb-4">{FormTitle}</h1>
          )}

          <TEInput
            label="Title"
            type="text"
            className="mb-6 text-white"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 w-full">
          <TEInput
            label="Author"
            type="text"
            className="mb-6 text-white"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <TERipple
          rippleColor="light"
          classsName="flex items-center justify-center w-full"
        >
          <button
            className="inline-block my-2 w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            type="submit"
          >
            Save
          </button>
        </TERipple>
        <Link to="/dashboard" className="text-white underline mb-4">
          Go back
        </Link>
      </form>
    </>
  );
};

export default BookFormComponent;
