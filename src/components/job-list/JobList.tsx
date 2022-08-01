import React from "react";

import SearchLine from "./search-line/SearchLine";
import SortedList from "./sorted-list/SortedList";

import "./JobList.scss";

const JobList: React.FC = () => {
  return (
    <div className="job-list">
      <h4>Job List</h4>
      <SearchLine />
      <SortedList />
    </div>
  );
};

export default JobList;
