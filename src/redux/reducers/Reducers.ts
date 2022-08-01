import { Actions, ActionTypes } from "../../utils/types";

const initialState = {
  reducer: {
    jobList: undefined,
    error: undefined,
    isDeleteSelected: undefined,
    isEditSelected: undefined,
    selectedJob: {
      name: undefined,
      category: undefined,
    },
    isLoading: undefined,
    searchValue: "",
    searchCategory: "",
  },
};

const Reducers = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case Actions.CREATE_NEW_JOB:
      return {
        ...state,
        error: undefined,
      };
    case Actions.SELECT_TO_DELETE:
      return {
        ...state,
        isDeleteSelected: true,
        selectedJob: action.payload,
      };
    case Actions.DELETE_JOB:
      return {
        ...state,
        error: undefined,
        isDeleteSelected: false,
        selectedJob: initialState.reducer.selectedJob,
      };
    case Actions.SELECT_TO_EDIT:
      return {
        ...state,
        error: undefined,
        isEditSelected: true,
        selectedJob: action.payload,
      };
    case Actions.EDIT_JOB:
      return {
        ...state,
        selectedJob: action.payload,
      };
    case Actions.CANCEL_SELECTION:
      return {
        ...state,
        isDeleteSelected: false,
        isEditSelected: false,
      };
    case Actions.GET_ALL_JOBS:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    case Actions.SET_ALL_JOBS:
      return {
        ...state,
        jobList: action.payload,
        isLoading: false,
      };
    case Actions.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case Actions.SET_SEARCH_CATEGORY:
      return {
        ...state,
        searchCategory: action.payload,
      };
    case Actions.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default Reducers;
