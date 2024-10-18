import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Misc = (props) => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Timer called", timer)
            // setTimer(timer + 1)
            setTimer((prevTimer) => prevTimer + 1)
        }, 1000);

        return () => {
            // Unmounting phase
            console.log("Misc unmounting");
            clearInterval(interval);
        }

    }, []); // Mounting

    console.log("Misc component rendered");

    return (
        <>
            {timer}
            <h2>Misc Topics - Optimization</h2>
            <Link to="/about-us">About Us</Link>
        </>
    )
};

export default memo(Misc);