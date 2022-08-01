import React from "react";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";

import { RiErrorWarningLine } from "react-icons/ri";
import "./JobDelete.scss";

const JobDelete: React.FC = () => {
  const dispatch = useDispatch();
  const { abort, deleteJob } = bindActionCreators(actionCreators, dispatch);
  const { getAllJobs } = bindActionCreators(actionCreators, dispatch);
  const handleDelete = async () => {
    await deleteJob();
    getAllJobs();
  };
  return (
    <div className="modal">
      <div className="warn">
        <RiErrorWarningLine className="warn-icon" />
        <p className="warn-text"> Are you sure you want to delete it?</p>
        <div className="warn-b-box">
          <button className="warn-c" onClick={() => abort()}>
            Cancel
          </button>
          <button className="warn-a" onClick={() => handleDelete()}>
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};
export default JobDelete;
