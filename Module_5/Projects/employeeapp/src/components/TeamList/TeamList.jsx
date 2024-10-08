
const TeamList = (props) => {
    // console.log(props)
    return (
        <>
            <h1>Team List</h1>
            <div>
                {
                    props.employees.map(data => {
                        return <div key={data.id} style={{
                            padding: "20px",
                            boxShadow: "4px 4px 4px grey"
                        }}>
                            {data.first_name} {data.last_name} - {data.age} years old
                            <button onClick={() => props.dispatch({ type: "REMOVE_FROM_TEAM_LIST", payload: data })}>REMOVE</button>
                        </div>
                    })
                }

                Average Age : {props.averageAge} <br />
                <button onClick={() => props.dispatch({ type: "CALCULATE_AVERAGE_AGE", payload: {} })}>Calculate Average Age</button>
                <button onClick={() => props.dispatch({ type: "SORT_LIST_BY_AGE", payload: {} })}>Sort by age</button>
            </div>
        </>
    )
};

export default TeamList;