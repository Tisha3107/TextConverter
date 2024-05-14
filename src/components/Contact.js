import { Button } from "bootstrap";
import React from "react";

export default function Contact() {
  return (
    <>
      <center>
        <h1 className="font-weight-bolder text-monospace">CONTACT US</h1>
      </center>
      <div className="container border">
        <form>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Contact us with your Email ID"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Subject</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Subject of your Query"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Write Your Query</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button className="btn-success btn-block font-weight-bolder">
            SUBMIT QUERY
          </button>
        </form>
      </div>
    </>
  );
}
