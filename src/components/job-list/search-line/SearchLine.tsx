import React from "react";

import "./SearchLine.scss";
import { MdSearch } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../redux";

import { InitialState } from "../../../utils/types";

const SearchLine: React.FC = () => {
  const dispatch = useDispatch();
  const { setSearchValue, setSearchCategory } = bindActionCreators(actionCreators, dispatch);
  const searchValue = useSelector((state: InitialState) => state.reducer.searchValue);
  const searchCategory = useSelector((state: InitialState) => state.reducer.searchCategory);

  return (
    <div className="form-line">
      <>
        <MdSearch className="s-icon" style={{ position: "absolute", padding: "10px" }} />
        <input
          className="search-name"
          placeholder="Job Name"
          defaultValue={searchValue}
          onChange={(event) => setSearchValue(event.currentTarget.value)}
        />
      </>
      <select
        className="search-priority"
        value={searchCategory}
        onChange={(e) => setSearchCategory(e.target.value)}
      >
        <option className="option" value="0">
          Priority(All)
        </option>
        <option className="option" value="1">
          Urgent
        </option>
        <option className="option" value="2">
          Regular
        </option>
        <option className="option" value="3">
          Trivial
        </option>
      </select>
    </div>
  );
};

export default SearchLine;
