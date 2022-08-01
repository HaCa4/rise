import React from "react";

import PrioritySpan from "./PrioritySpan";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../redux";

import { Job } from "../../../../utils/types";

import "./SingleTodo.scss";
import { MdEdit, MdDelete } from "react-icons/md";

type SingleTodoProps = {
  job: Job;
};
const SingleTodo: React.FC<SingleTodoProps> = ({ job }: SingleTodoProps) => {
  const dispatch = useDispatch();
  const { selectToDelete, selectToEdit } = bindActionCreators(actionCreators, dispatch);

  return (
    <tr className="tb-r">
      <td className="td-name">{job.name}</td>
      <td>
        <PrioritySpan category={job.category} />
      </td>
      <td>
        <MdEdit className="icon-edit" onClick={() => selectToEdit(job)} />
        <MdDelete className="icon-delete" onClick={() => selectToDelete(job)} />
      </td>
    </tr>
  );
};

export default SingleTodo;
