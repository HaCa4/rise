import { Dispatch } from "redux";
import { Actions, InitialState, Job } from "../../utils/types";
import { db } from "../../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

export const createNewJob = (job: Job) => async (dispatch: Dispatch) => {
  try {
    await addDoc(collection(db, "jobs"), {
      name: job.name,
      category: job.category,
    });
    dispatch({ type: Actions.CREATE_NEW_JOB });
  } catch (error) {
    const errorMessage = "Faced with an error while creating the job: " + error;
    dispatch({ type: Actions.SET_ERROR, payload: errorMessage });
  }
};
export const getAllJobs = () => async (dispatch: Dispatch) => {
  dispatch({ type: Actions.GET_ALL_JOBS });
  let data: Job[] = [];
  let obj: Job = {};
  const ordered = query(collection(db, "jobs"), orderBy("category"), orderBy("name"));
  try {
    const storeData = await getDocs(ordered);
    storeData.docs.map((doc) => {
      obj.id = doc.id;
      obj.name = doc.data().name;
      obj.category = doc.data().category;
      data.push(obj);
      obj = {};
      return data;
    });
    dispatch({
      type: Actions.SET_ALL_JOBS,
      payload: data,
    });
  } catch (error) {
    const errorMessage =
      "Faced with an error while fetching the job list from the database: " + error;
    dispatch({ type: Actions.SET_ERROR, payload: errorMessage });
  }
};
export const selectToDelete = (data: Job) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: Actions.SELECT_TO_DELETE, payload: data });
  } catch (error) {
    const errorMessage = "Faced with an error while selecting the job: " + error;
    dispatch({ type: Actions.SET_ERROR, payload: errorMessage });
  }
};
export const deleteJob = () => async (dispatch: Dispatch, getState: () => InitialState) => {
  const { id } = getState().reducer.selectedJob;
  try {
    await deleteDoc(doc(db, "jobs", `${id}`));
    dispatch({ type: Actions.DELETE_JOB });
  } catch (error) {
    const errorMessage = "Faced with an error while deleting the job from the database: " + error;
    dispatch({ type: Actions.SET_ERROR, payload: errorMessage });
  }
};
export const selectToEdit = (data: Job) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: Actions.SELECT_TO_EDIT, payload: data });
  } catch (error) {
    const errorMessage = "Faced with an error while selecting the job: " + error;
    dispatch({ type: Actions.SET_ERROR, payload: errorMessage });
  }
};
export const editJob = (data: Job) => async (dispatch: Dispatch) => {
  try {
    await updateDoc(doc(db, "jobs", `${data.id}`), {
      category: data.category,
    });
    dispatch({ type: Actions.EDIT_JOB });
  } catch (error) {
    const errorMessage = "Faced with an error while editing the job: " + error;
    dispatch({ type: Actions.SET_ERROR, payload: errorMessage });
  }
};
export const setSearchCategory = (value: string) => {
  return { type: Actions.SET_SEARCH_CATEGORY, payload: value };
};
export const setSearchValue = (value: string) => {
  return { type: Actions.SET_SEARCH_VALUE, payload: value };
};
export const abort = () => async (dispatch: Dispatch) => {
  dispatch({ type: Actions.CANCEL_SELECTION });
};
