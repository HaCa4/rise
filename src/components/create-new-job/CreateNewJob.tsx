import { useFormik } from "formik";
import * as Yup from "yup";

import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import { useDispatch } from "react-redux";

import "./CreateNewJob.scss";
import React from "react";

const CreateNewJob: React.FC = () => {
  const dispatch = useDispatch();
  const { createNewJob, getAllJobs } = bindActionCreators(actionCreators, dispatch);

  const addNewJobFormik = useFormik({
    initialValues: {
      name: "",
      category: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Please write a job name")
        .max(250, "Job names cannot exceed 250 characters"),
      category: Yup.string().required("Please select the priority level"),
    }),
    onSubmit: (values) => {
      createNewJob(values);
      getAllJobs();
    },
  });
  return (
    <div className="create-new-job">
      <h4>Create New Job</h4>
      <form className="form-line-1" onSubmit={addNewJobFormik.handleSubmit}>
        <div className="labelled grow">
          <label className="label">Job Name</label>
          <input
            className="create-name"
            name="name"
            value={addNewJobFormik.values.name}
            onChange={addNewJobFormik.handleChange}
            onBlur={addNewJobFormik.handleBlur}
          />
        </div>
        <div className="button-container">
          <div className="labelled">
            <label className="label">Job Priority</label>
            <select
              className="create-priority"
              name="category"
              value={addNewJobFormik.values.category}
              onChange={addNewJobFormik.handleChange}
              onBlur={addNewJobFormik.handleBlur}
            >
              <option value="1">Urgent</option>
              <option value="2">Regular</option>
              <option value="3">Trivial</option>
            </select>
          </div>
          <button className="create-button" type="submit">
            Create
          </button>
        </div>
      </form>
      {
        <div style={{ marginTop: "-1.2rem", display: "flex" }}>
          {addNewJobFormik.errors.name && <h5 className="alert">*{addNewJobFormik.errors.name}</h5>}
          {addNewJobFormik.errors.category && (
            <h5 className="alert">*{addNewJobFormik.errors.category}</h5>
          )}
        </div>
      }
    </div>
  );
};

export default CreateNewJob;
