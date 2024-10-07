const EmployeeList = (props) => {
    // console.log(props)
    return (
        <>
            <h1>Employee List</h1>
            {
                props.employees.map(data => {
                    return <div key={data.id} style={{
                        padding: "20px",
                        boxShadow: "4px 4px 4px grey"
                    }}>
                        {data.first_name} {data.last_name} - {data.age} years old
                        <button onClick={() => props.dispatch({ type: "ADD_TO_TEAM_LIST", payload: data })}>ADD</button>
                    </div>
                })
            }
        </>
    )
};

export default EmployeeList;