import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Form.css";
import Modal from "./Modal";

const Form = () => {
  const [valuesForm, setValuesForm] = useState({});

  const initialValues = {
    name: "",
    email: "",
    password: "",
    textarea: "",
  };

  const required = "Required";

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(required),
    email: Yup.string().email("Invalid email").required(required),
    password: Yup.string().required(required),
  });

  const onSubmit = () => {
    const { name, email, password, textarea } = values;
    setValuesForm({
      name: name,
      email: email,
      password: password,
      textarea: textarea,
    });
    //modal
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleChange, handleSubmit, errors, touched, handleBlur, values } =
    formik;

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <form onSubmit={handleSubmit} style={{ width: 500 }}>
        <h2>Form</h2>

        <div className="mb-4">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className={`${
              errors.name && touched.name
                ? "form-control is-invalid"
                : "form-control"
            }`}
            placeholder="Woody Allen"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className={`${
              errors.email && touched.email
                ? "form-control is-invalid"
                : "form-control"
            }`}
            placeholder="contoso@domain.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className={`${
              errors.password && touched.password
                ? "form-control is-invalid"
                : "form-control"
            }`}
            placeholder="Provide a password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="form-label">Text Area</label>
          <textarea
            className="form-control"
            rows="1"
            name="textarea"
            value={values.textarea}
            onChange={handleChange}
          ></textarea>
        </div>
        <Modal errors={errors} valuesForm={valuesForm} />
        {/* <button type="submit" className="btn btn-secondary">
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default Form;
