import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export type Job =
  | {
      name?: string;
      category?: string;
      id?: string;
    }
  | any;

export type InitialState = {
  reducer: {
    newJob: Job;
    jobList: Job[];
    selectedJob: Job;
    isLoading: boolean;
    error: string;
    isDeleteSelected: boolean;
    isEditSelected: boolean;
    searchValue: string;
    searchCategory: string;
  };
};

export enum Actions {
  CREATE_NEW_JOB = "CREATE_NEW_JOB",
  SELECT_TO_EDIT = "SELECT_TO_EDIT",
  EDIT_JOB = "EDIT_JOB",
  SELECT_TO_DELETE = "SELECT_TO_DELETE",
  DELETE_JOB = "DELETE_JOB",
  CANCEL_SELECTION = "CANCEL_SELECTION",
  GET_ALL_JOBS = "GET_ALL_JOBS",
  SET_ALL_JOBS = "SET_ALL_JOBS",
  SET_ERROR = "SET_ERROR",
  SET_SELECTED_JOB = "SET_SELECTED_JOB",
  SET_SEARCH_VALUE = "SET_SEARCH_VALUE",
  SET_SEARCH_CATEGORY = "SET_SEARCH_CATEGORY",
}
type CreateNewJob = {
  type: Actions.CREATE_NEW_JOB;
  payload: Job;
};
type EditJob = {
  type: Actions.EDIT_JOB;
  payload: Job;
};
type DeleteJob = {
  type: Actions.DELETE_JOB;
};
type GetAllJobs = {
  type: Actions.GET_ALL_JOBS;
};
type SetAllJobs = {
  type: Actions.SET_ALL_JOBS;
  payload: Job[];
};
type SelectToDelete = {
  type: Actions.SELECT_TO_DELETE;
  payload: Job;
};
type SelectToEdit = {
  type: Actions.SELECT_TO_EDIT;
  payload: Job;
};
type SetError = {
  type: Actions.SET_ERROR;
  payload: string;
};
type SetSearchValue = {
  type: Actions.SET_SEARCH_VALUE;
  payload: string;
};
type SetSearchCategory = {
  type: Actions.SET_SEARCH_CATEGORY;
  payload: string;
};
type CancelSelection = {
  type: Actions.CANCEL_SELECTION;
};

export type ActionTypes =
  | CreateNewJob
  | EditJob
  | DeleteJob
  | GetAllJobs
  | SetAllJobs
  | SelectToDelete
  | SelectToEdit
  | CancelSelection
  | SetError
  | SetSearchValue
  | SetSearchCategory;
