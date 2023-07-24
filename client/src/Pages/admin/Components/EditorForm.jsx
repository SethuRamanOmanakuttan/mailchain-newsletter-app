import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../CSS/quill.css";
import { sendNewsletter } from "../Utils/AdminUtils";

export const EditorForm = (props) => {
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Check if the content is empty
    if (!content.trim()) {
      setError("Cannot send blank content!");
      setLoading(false);
      return;
    }

    // Check if there are no subscribers
    if (props.subscribers === 0) {
      setError("There are no subscribers to send the newsletter to!");
      setLoading(false);
      return;
    }

    const status = await sendNewsletter(`<div>${content}</div>`);
    if (status === 500) {
      setError(
        "An error occurred while sending the newsletter. Please try again."
      );
    } else {
      setSuccess("Newsletter sent successfully!");
    }
    setLoading(false);
  };

  return (
    <form className="mt-1 flex flex-col items-start ml-3" onSubmit={submitForm}>
      <div className="h-max-[250px] border-3 border-batman rounded-lg">
        <ReactQuill className=" w-[908px]" onChange={setContent} theme="snow" />
      </div>

      <button
        className="w-1/7 mx-auto mt-3  border-3 border-batman rounded-2xl text-center font-bebas text-xl text-batman hover:bg-batman hover:text-beige bg-beige p-2"
        disabled={isLoading}
      >
        <p className="mb-[-2px]">{isLoading ? "One sec..." : "Send Letter"}</p>
      </button>
      <div className=" mr-auto ml-auto ">
        {error && (
          <p className="text-red mt-2 font-bebas text-2xl  ">{error}</p>
        )}
        {success && (
          <p className="text-green mt-2 font-bebas text-2xl">{success}</p>
        )}
      </div>
    </form>
  );
};
