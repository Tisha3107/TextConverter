import React, { useState } from "react";

export default function Textform(props) {
  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleSmallClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleclearText = () => {
    let newText = text.replace(text, "");
    setText(newText);
  };

  const handleWhiteSpace = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
  };

  const handleCopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <center>
          <p className="font-weight-bold">
            Change Text Case is a handy web application that enables you to
            change the text case of any given text. Simply copy and paste the
            text into
          </p>
          <p className="font-weight-bold">
            the text area below and click the required text case
          </p>

          <h4 className="text-danger">{props.heading}</h4>
        </center>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="9"
            placeholder="Write the text that you want to convert"
          ></textarea>
        </div>
        <button className="btn btn-success my-3 " onClick={handleupClick}>
          CONVERT TO UPPERCASE
        </button>
        <button
          className="btn btn-success my-3 mx-3"
          onClick={handleSmallClick}
        >
          CONVERT TO LOWERCASE
        </button>
        <button
          type="button"
          className="btn btn-success my-3 mx-3"
          id="liveToastBtn"
          onClick={handleCopyText}
        >
          COPY TO CLIPBOARD
        </button>

        <button
          className="btn btn-success my-3 mx-3"
          onClick={handleWhiteSpace}
        >
          FORMAT
        </button>
        <button className="btn btn-success my-3 mx-3" onClick={handleclearText}>
          CLEAR TEXT
        </button>
      </div>
      <center>
        <div className="container">
          <h2 className="font-weight-bolder text-primary">Your Text Summary</h2>
          <p className="font-weight-bolder">
            Words : {text.split(" ").length} , Characters : {text.length}
          </p>
          <p className="font-weight-bolder">
            {0.008 * text.split(" ").length} Minutes to read
          </p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </center>
    </>
  );
}
