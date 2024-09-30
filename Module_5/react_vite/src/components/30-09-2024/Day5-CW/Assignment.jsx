import { useEffect, useState } from "react";

const AssignmentDay5CW = () => {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");

  const [planner, setPlanner] = useState([]);

  useEffect(() => {
    /**
     * 1. Check if the data is present in local storage
     * 2. If present use the data and render it on screen
     */
    const plannerData = localStorage.getItem("plannerData");
    console.log(plannerData);
    if (plannerData) {
        console.log("plannerData available");
        setPlanner(JSON.parse(plannerData));
    }
  }, []); // Mounting phase

  const handleAddClick = (e) => {
    e.preventDefault();
    const obj = {
      subject: subject,
      hours: hours,
    };
    const plannerArray = [...planner, obj];
    setPlanner(plannerArray);
    localStorage.setItem("plannerData", JSON.stringify(plannerArray));
    setSubject("");
    setHours("");
  };

  const handlePlusBtn = (index) => {
    // const plannerCopy = [...planner];
    // const plannerCopy = Array.from(planner);
    // JSON.parse(JSON.stringify(planner)) // Hack for deep copy

    // const plannerCopy = planner;
    const updatedObj = {
      ...plannerCopy[index],
      hours: parseInt(plannerCopy[index].hours) + 1, // Add 1 to existing hours key at a prticular index
    };
    plannerCopy.splice(index, 1, updatedObj);
    setPlanner(plannerCopy);
  };

  return (
    <>
      <h1>Edu Planner</h1>
      <form>
        <input
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          type="text"
          placeholder="subject"
          value={subject}
        />
        <input
          onChange={(e) => {
            setHours(e.target.value);
          }}
          value={hours}
          type="number"
          step={1}
          placeholder="hours"
        />
        <button onClick={handleAddClick}>Add</button>
      </form>
      {planner.map((data, index) => {
        return (
          <div key={`card_${index}`}>
            {data.subject} - {data.hours} hours
            <button
              onClick={() => {
                handlePlusBtn(index);
              }}
            >
              +
            </button>
            <button>-</button>
          </div>
        );
      })}
    </>
  );
};

export default AssignmentDay5CW;
