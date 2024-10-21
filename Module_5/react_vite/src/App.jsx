import "./App.css";

import { Provider } from "react-redux";

import store from "./store";
import ToDoContainer from "./components/21-10-2024/ToDoContainer";


const App = () => {

  return (
    <>
      <Provider store={store}>
        <ToDoContainer />
      </Provider>
    </>
  );
};

export default App;
