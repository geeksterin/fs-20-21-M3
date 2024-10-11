import { createContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardList from './components/CardList/CardList'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const TrelloContext = createContext();

function App() {

  const initState = {
    todoList: [],
    inProgressList: [],
    completedList: []
  };

  /**
   * ADD_ITEM,
   * EDIT_ITEM,
   * DELETE_ITEM,
   * MOVE_ITEM
   */

  const reducerFn = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          [action.payload.listName]: [...state[action.payload.listName], action.payload.data]
        } // Made a copy of state, copy of the list and added the data to it
      case "EDIT_ITEM":
      case "DELETE_ITEM":
      case "MOVE_ITEM":
      // Write the code to move item from one list to another
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, initState);

  return (
    <>
      Trello Clone
      <TrelloContext.Provider value={{ state, dispatch }}>
        <DndProvider backend={HTML5Backend}>
          <div className='cards-list-container'>
            <CardList id={"todoList"} title={"To Do"} />
            <CardList id={"inProgressList"} title={"In Progress"} />
            <CardList id={"completedList"} title={"Completed"} />
          </div>
        </DndProvider>
      </TrelloContext.Provider>
    </>
  )
}

export default App
