import { useSelector } from "react-redux";

import "./App.scss";

import CreateNewJob from "./components/create-new-job/CreateNewJob";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import JobList from "./components/job-list/JobList";
import JobDelete from "./components/pop-ups/JobDelete";
import JobEdit from "./components/pop-ups/JobEdit";

import { InitialState } from "./utils/types";

function App() {
  const isSelectedToDelete = useSelector((state: InitialState) => state.reducer.isDeleteSelected);
  const isSelectedToEdit = useSelector((state: InitialState) => state.reducer.isEditSelected);
  return (
    <div className="App">
      {isSelectedToDelete && <JobDelete />}
      {isSelectedToEdit && <JobEdit />}
      <Header />
      <CreateNewJob />
      <JobList />
      <Footer />
    </div>
  );
}

export default App;
