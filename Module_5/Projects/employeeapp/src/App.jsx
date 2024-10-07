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
    if (action.action === "ADD_TO_TEAM_LIST") {
      // ToDo : Write the logic
      console.log("Action dispatched", state, action)
      return {
        ...state,
        teamList: [...state.teamList, action.payload]
      }

    } else if (action.action === "REMOVE_FROM_TEAM_LIST") {
      // ToDo : Write the logic
    } else if (action.action === "CALCULATE_AVERAGE_AGE") {
      // ToDo : Write the logic
    } else if (action.action === "SORT_LIST_BY_AGE") {
      // ToDo : Write the logic
    } else {
      // ToDo: Don't do anything, let the original data be as it is
    }
  };

  const [masterData, dispatch] = useReducer(reducerFn, {
    employeeList: employeesJson,
    teamList: [],
    averageAge: 0
  })

  console.log(masterData)
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
            employees={masterData.employeeList}
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
            employees={masterData.teamList}
          />
        </div>

      </div>
    </>
  )
}

export default App
