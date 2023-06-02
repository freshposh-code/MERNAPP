import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const format = [];

const CreatePost = () => {
  // const [value, setValue] = useState("");
  const [summary, setSummary] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // function createNewPost(e) {
  //   const data = new FoemData()
  //   data.set('title', title);
  //   e.preventDefault();

  //   fetch ('http://localhost:8000/post' , {
  //     method='POST',
  //     body:
  //   })
  //   }
  // }
  return (
    <>
      <form className="form">
        <input
          type="title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          placeholder="title"
        />
        <input
          type="summary"
          placeholder="summary"
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />
        <input type="file" />
        <ReactQuill
          theme="snow"
          value={content}
          // module={modules}
          // formats={formats}
          onChange={(newValue) => setContent(newValue)}
        />
        <button style={{ marginTop: "5px" }}>create Post</button>
      </form>
    </>
  );
};

export default CreatePost;
