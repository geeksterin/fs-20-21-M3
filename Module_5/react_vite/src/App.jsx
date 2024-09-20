import { useState } from 'react'
import './App.css'

import Panel from './components/20-09-2024/Panel/Panel';

const App = () => {
  const [expandedPanelId, setExpandedPanelId] = useState(0);

  const handleBtnClick = (id) => {
    // if(isExpanded) {
    //     setExpanded(false)
    // } else {
    //     setExpanded(true)
    // }
    // setExpanded(!isExpanded);
    setExpandedPanelId(id);
  };

  return (
    <div>
      <h1>Accordion</h1>

      <div className='accordion'>
        <Panel id={1} expandedPanelId={expandedPanelId} text={"This is a very long content part for panel number 1"} handleBtnClick={handleBtnClick} />
        <Panel id={2} expandedPanelId={expandedPanelId} text={"This is a very long content part for panel number 2"} handleBtnClick={handleBtnClick} />
        <Panel id={3} expandedPanelId={expandedPanelId} text={"This is a very long content part for panel number 3"} handleBtnClick={handleBtnClick} />
      </div>
    </div>
  )
}

export default App
