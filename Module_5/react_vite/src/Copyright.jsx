import styles from "./Copyright.module.css";

const Copyright = (props) => {
    console.log(props)
    props.nums?.map(data => {
        console.log(data)
    })
    return (
        <div>
            <p className={styles.largeTxt}>Copyright {props.year}, {props.companyName} , India</p>
            Details : 
            Name : {props.details?.userName}
            Age : {props.details?.age}

            {
                // Object.entries(props.details).map()
            }
            Array Details : 
            {props.nums?.map(data => <p>{data.userName} {data.id}</p> )}
        </div>
    )
};

export default Copyright;
// const copyright = (year) => {
//     console.log(`Copyright ${year}, XYZ Inc, India`)
// }

// copyright(2024)