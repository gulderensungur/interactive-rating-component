import React from "react";
import { useState } from "react";
import "./App.css";

import star from "./images/icon-star.svg";
import thankYou from "./images/illustration-thank-you.svg";

function App() {
  const [ratingValue, setRatingValue] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const changeHandler = (event) => {
    setRatingValue(event.target.value);
    console.log(event.target.value);
  };
  const submitClickHandler = () => {
    setIsSubmit(true);
  };
  return !isSubmit ? (
    <div className="App">
      <main>
        <div className="container">
          <div className="rating-wrapper">
            <div className="round-background">
              <img src={star} alt="Star" />
            </div>
            <div className="rating-wrapper-content">
              <div className="rating-text-wrapper">
                <h2>How did we do?</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat velit corrupti qui eos fugiat consectetur in debitis
                  repellendus exercitationem nemo.
                </p>
              </div>
              <div className="rating-number">
                <input
                  type="radio"
                  id="1"
                  name="radios"
                  value={1}
                  onChange={changeHandler}
                />
                <label htmlFor="1" className="round-background">
                  1{" "}
                </label>

                <input
                  type="radio"
                  id="2"
                  name="radios"
                  value={2}
                  onChange={changeHandler}
                />
                <label htmlFor="2" className="round-background">
                  2
                </label>

                <input
                  type="radio"
                  id="3"
                  name="radios"
                  value={3}
                  onChange={changeHandler}
                />
                <label htmlFor="3" className="round-background">
                  3
                </label>

                <input
                  type="radio"
                  id="4"
                  name="radios"
                  value={4}
                  onChange={changeHandler}
                />
                <label htmlFor="4" className="round-background">
                  4
                </label>

                <input
                  type="radio"
                  id="5"
                  name="radios"
                  value={5}
                  onChange={changeHandler}
                />
                <label htmlFor="5" className="round-background">
                  5
                </label>
              </div>
              <div className="submit-button">
                <button onClick={submitClickHandler}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  ) : (
    <div className="App">
      <main>
        <div className="container">
          <div className="thanks-wrapper">
            <div className="thanks-img">
              <img src={thankYou} alt="" />
            </div>
            <div className="result-message">
              <h5>
                You selected <span>{ratingValue}</span> out of 5
              </h5>
            </div>
            <div className="thank-you-text">
              <h2>Thank you!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                laboriosam necessitatibus aliquam, nesciunt provident soluta!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
