import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../redux";

import { filterJobs } from "../../../utils/helpers/filterJobs";
import { InitialState } from "../../../utils/types";

import SingleTodo from "./single-todo/SingleTodo";
import "./SortedList.scss";

const SortedList: React.FC = () => {
  const dispatch = useDispatch();

  const jobList = useSelector((state: InitialState) => state.reducer.jobList);
  const searchValue = useSelector((state: InitialState) => state.reducer.searchValue);
  const searchCategory = useSelector((state: InitialState) => state.reducer.searchCategory);

  const { getAllJobs } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div className="sorted-list">
      <table>
        <thead className="thead">
          <tr>
            <th className="th-name">Name</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobList &&
            filterJobs(jobList, searchValue, searchCategory).map((job) => (
              <SingleTodo key={job.id} job={job} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortedList;
