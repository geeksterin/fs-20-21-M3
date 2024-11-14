import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeList from './components/EmployeeList/EmployeeList'
import TeamList from './components/TeamList/TeamList'

import employeesJson from "./static/employees.json";

function App() {

  /**
   * ADD_TO_TEAM_LIST
   * REMOVE_FROM_TEAM_LIST
   * CALCULATE_AVERAGE_AGE
   * SORT_LIST_BY_AGE
   */

  // Syntaax : const [variable, setterFunction] = useState(<init-value>)
  // Syntax :           const [variable, setterFunction] = useReducer(<pure-fn>,<init-value>)
  // Syntax (Fancy) :   const [masterData, dispatch] = useReducer(reducerFn, init-value);

  // const masterData = {
  //   employeeList: employeesJson,
  //   teamList: [],
  //   averageAge: 0
  // }

  // Action to manipulate data
  const reducerFn = (state, action) => {
    /**
     * 1. Never update the original data, always make copy and change it
     * 2. Once copy is updated, return it
     */
    console.log("Reducer fn called", state)
    if (action.type === "ADD_TO_TEAM_LIST") {
      // Add button is clicked
      // console.log("Add btn clicked")

      // Pushed the new object into the teamList array of state
      const stateCopy = { ...state };
      const teamListCopy = [...stateCopy.teamList];
      teamListCopy.push(action.payload);
      stateCopy.teamList = teamListCopy;

      return stateCopy;
      // stateCopy.teamList.push(action.payload)

      // const updatedData = {
      //   ...state,
      //   teamList: [...state.teamList, action.payload]
      // }
      // return updatedData;
    } else if (action.type === "CALCULATE_AVERAGE_AGE") {
      const avgAge = (state.teamList.reduce((pv, cv) => pv + cv.age, 0) / state.teamList.length).toFixed(2);

      // let total = 0;
      // for (let i = 0; i < state.teamList.length; i++) {
      //   total += state.teamList[i].age
      // }

      const stateCopy = {
        ...state
      }
      stateCopy.averageAge = avgAge;
      return stateCopy;
    } else if (action.type === "REMOVE_FROM_TEAM_LIST") {

    } else if (action.type === "SORT_LIST_BY_AGE") {

    } else {
      return state;
    }
  };

  const initState = {
    employeeList: employeesJson,
    teamList: [],
    averageAge: 0
  }

  const [state, dispatch] = useReducer(reducerFn, initState);
  // const [counter, setCounter] = useState(0);

  // console.log(typeof dispatch)
  return (
    <>
      <h1>Employee App </h1>
      <div style={{
        display: "flex",
        gap: "2rem"
      }}>
        <div style={{
          border: "2px solid black"
        }}>
          <EmployeeList
            employees={state.employeeList}
            // onAddClick={onAddClick}
            dispatch={dispatch}
          />

        </div>
        <div style={{
          border: "2px solid black"
        }}>
          <TeamList
            dispatch={dispatch}
            // onCalculateAverageAgeClick={onCalculateAverageAgeClick} 
            // onSortByAgeClick={onSortByAgeClick} 
            // onRemoveClick={onRemoveClick} 
            employees={state.teamList}
            averageAge={state.averageAge}
          />
        </div>

      </div>
    </>
  )
}

export default App
