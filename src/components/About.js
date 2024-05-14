import React from "react";

export default function About() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide border"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1494178270175-e96de2971df9?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
              width="100px"
              height="350px"
              className="d-block w-100"
              alt="First"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjB0ZXh0fGVufDB8fDB8fHww "
              width="100px"
              height="350px"
              className="d-block w-100"
              alt="First"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1552508744-1696d4464960?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
              width="100px"
              height="350px"
              className="d-block w-100"
              alt="First"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div classNameName="container my-3">
        <h1 classNameName="my-4 mx-3">
          <center>
            <strong>ABOUT US</strong>
          </center>
        </h1>
        <div className="container border my-3">
          <h4 className="font-weight-bolder my-2">
            An Easy Way To Change Uppercase to Lowercase And Title
            Capitalization
          </h4>
          <p className="font-weight-normal text-dark">
            Have you ever typed out a document, made a few capitalization
            mistakes and wished you won't have to waste much time editing? It
            happens a lot, and if you are using a typical word processing tool,
            you will have your mistakes autocorrected as you type, but those
            kinds of software only correct grammatical errors. If you have to
            capitalize on a whole portion, you will need to do it manually. And
            that takes time. However, with an online text transforming tool like
            ours, you can easily transform the case of your texts.
          </p>
          <p className="font-weight-normal text-dark">
            All you have to do is copy and paste your text, then select the case
            you want to transform it to. The Change Uppercase to Lowercase Tool
            is one of several SEO tools available on our site SmallSEOTools.com.
            It is an online text Converter that can receive both upper cases and
            lower case letters as input and do a text transform on them into
            desired cases.
          </p>
          <center>
            <p>
              <a
                className="btn btn-danger fw-bolder mx-3 dt"
                data-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Toggle Case
              </a>
              <button
                className="btn btn-danger mx-3"
                type="button"
                data-toggle="collapse"
                data-target="#multiCollapseExample2"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
              >
                Lower Case To Upper Case Letters
              </button>
            </p>
          </center>
          <div className="row">
            <div className="col">
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample1"
              >
                <div className="card card-body font-italic text-dark">
                  The tOGGLE cASE text tool, also called Change Case tool that
                  changes the text case of all the upper case and lowers case
                  letters inputted into the text area. All upper case letters
                  are converted to lower case and all lower case letters are
                  converted to upper case. The tOGGLE cASE text tool comes in
                  handy for when text has been written in upper case due to the
                  Caps Lock key being left on inadvertently.
                  <br />
                  Instead of deleting the affected text, they can be highlighted
                  and converted to lower case letters. Additionally, you can use
                  the tOGGLE cASE tool to beautify your headline or handle. Most
                  individuals and brands use it for the purpose of capturing
                  people’s attention. Isn’t it easier to notice eBay compared to
                  eBay?
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample2"
              >
                <div className="card card-body font-italic font-weight-normal">
                  The UPPER CASE text tool takes every lowercase letter inputted
                  into the text area and converts all to uppercase letters.
                  Upper case letters or “ALL CAPS” find use in words or phrases
                  a writer wants to emphasize, in titles on book covers, in
                  advertisements, to highlight a message, in newspaper
                  headlines, and on building plaques. They also indicate
                  acronyms in texts.
                </div>
              </div>
            </div>
          </div>
          <div className="my-3">
            <h1>Text Converter: Capital Letters And Small Letters</h1>
            <p className="font-weight-normal">
              The Capitalize Word text tool will take every first lower case
              letters of every word in the sentence inputted and change all to
              upper case letters. Capitalized words or “Title Cases” as they are
              known are widely used for titles in texts where every word in the
              sentence; except for articles, conjunctions and prepositions;
              begins with a capital letter.
              <br /> It's common to see title cases used for titles of books,
              plays, and movies, but seldom for articles. This variation is
              mostly a question of style. When writing, decide the headline
              style you want to use. This is of course if you are not writing
              under strict guidelines where you are given a headline style.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
