import styles from "./Content.module.css";
import Card from "./Card";

const Content = () => {
    // const pStyles = {
    //     color: "red",
    //     fontSize: "70px"
    // };

    return (
        <main className="container">
           <h1>Videos</h1>
            <Card imgSrc={""} heading={"My Video"} channelName={"XYZ Youtube channel"} views={50000} />
            <Card imgSrc={""} heading={"My Video2"} channelName={"ABC Youtube channel"} views={70000} />
        </main>
    )
};

export default Content;