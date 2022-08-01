import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";

import { InitialState } from "../../utils/types";

import "./JobEdit.scss";

const JobEdit: React.FC = () => {
  const dispatch = useDispatch();
  const selectedJob = useSelector((state: InitialState) => state.reducer.selectedJob);
  const { abort, editJob, getAllJobs } = bindActionCreators(actionCreators, dispatch);

  const editJobFormik = useFormik({
    initialValues: {
      name: `${selectedJob.name}`,
      category: `${selectedJob.category}`,
      id: `${selectedJob.id}`,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Please write a job name")
        .max(250, "Job names cannot exceed 250 characters"),
      category: Yup.number().required("Please select the priority level"),
    }),
    onSubmit: (values) => {
      editJob(values);
      abort();
      getAllJobs();
    },
  });

  return (
    <div className="modal">
      <div className="warn">
        <h4>Job Edit</h4>
        <form className="edit-form" onSubmit={editJobFormik.handleSubmit}>
          <div className="edit-line">
            <label className="label">Job Name</label>
            <input
              className="edit-name"
              name="name"
              value={editJobFormik.values.name}
              readOnly={true}
              // onChange={editJobFormik.handleChange}
              // onBlur={editJobFormik.handleBlur}
            />
          </div>
          <div className="edit-line">
            <label className="label">Job Priority</label>
            <select
              className="edit-priority"
              name="category"
              value={editJobFormik.values.category}
              onChange={editJobFormik.handleChange}
              onBlur={editJobFormik.handleBlur}
            >
              <option value="1">Urgent</option>
              <option value="2">Regular</option>
              <option value="3">Trivial</option>
            </select>
          </div>
          <div className="form-b-box">
            <button className="edit-c" onClick={() => abort()}>
              Cancel
            </button>
            <button type="submit" className="edit-s">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobEdit;
