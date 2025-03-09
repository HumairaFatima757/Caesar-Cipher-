import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  // const [shift, setShift] = useState(" ");
  const shift = 3;

  const [result, setResult] = useState("");
  const [showresult, setShowResult] = useState(false);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function encrypt() {
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
      let char = text[i].toUpperCase();

      let index = alphabet.indexOf(char);

      if (index !== -1) {
        let newIndex = (index + shift) % 26;
        encryptedText += alphabet[newIndex];
      } else {
        encryptedText += char;
      }
    }
    setResult(encryptedText);
    setShowResult(true);
    setText(" ");
    // setShift(" ")
    console.log(encryptedText);
  }
  function decrypt() {
    let decryptedText = "";

    for (let i = 0; i < text.length; i++) {
      let char = text[i].toUpperCase();

      let index = alphabet.indexOf(char);
      if (index !== -1) {
        let newIndex = (index - shift + 26) % 26;
        decryptedText += alphabet[newIndex].toLowerCase();
      } else {
        decryptedText += char;
      }
    }
    setResult(decryptedText);
    setShowResult(true);
    setText(" ");
    // setShift(" ")
    console.log(decryptedText);
  }
  return (
    <>
      <div
        className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
        tabIndex="-1"
        role="dialog"
        id="modalTour"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-body p-5">
              <h2  className="fw-bold mb-0 text-center text-primary ">Ceaser Cipher </h2>

              <ul className="d-grid gap-4 my-5 list-unstyled small">
                <li className="d-flex gap-4">
                  <svg
                    className="bi text-body-secondary flex-shrink-0"
                    width="48"
                    height="48"
                  >
                    <use xlinkHref="#grid-fill"></use>
                  </svg>
                  <div className="text-center">
                    <h5 className="mb-0 mt-4">Enter Plain Text :</h5>
                    <input
                      type="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Enter text here"
                      className="form-control w-75 mx-auto mt-4"
                    />
                  </div>
                </li>
                {/* <li className="d-flex gap-4">
                  <svg
                    className="bi text-warning flex-shrink-0"
                    width="48"
                    height="48"
                  >
                    <use xlinkHref="#bookmark-star"></use>
                  </svg> */}
                  {/* <div>
                    <h5 className="mb-0">Enter Shift Value here</h5>
                    <input
                      type="text"
                      value={shift}
                      onChange={(e) => setShift(Number(e.target.value))}
                    />
                  </div> */}
                {/* </li> */}
                <div className="row">
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-lg btn-primary w-100"
                      data-bs-dismiss="modal"
                      onClick={encrypt}
                    >
                      Encrypt
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-lg btn-primary w-100"
                      data-bs-dismiss="modal"
                      onClick={decrypt}
                    >
                      Decrypt
                    </button>
                  </div>
                </div>

                <li className="d-flex gap-4">
                  <svg
                    className="bi text-primary flex-shrink-0"
                    width="48"
                    height="48"
                  >
                    <use xlinkHref="#film"></use>
                  </svg>
                  <div>
                    {showresult && <h5 className="mb-0"> Result </h5>} {result}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
