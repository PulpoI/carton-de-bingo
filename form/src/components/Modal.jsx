import React from "react";
import "./Modal.css";

const Modal = ({ valuesForm, errors }) => {
  return (
    <>
      {/* Button trigger modal */}
      <button
        type="submit"
        className="btn btn-secondary"
        data-bs-toggle={
          errors.email || errors.name || errors.password === "Required"
            ? ""
            : "modal"
        }
        data-bs-target="#exampleModal"
      >
        Submit
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <pre className="modal-body">
              {JSON.stringify(valuesForm, null, 2)}
            </pre>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
