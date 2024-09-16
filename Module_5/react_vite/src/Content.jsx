import styles from "./Content.module.css";

const Content = () => {
    // const pStyles = {
    //     color: "red",
    //     fontSize: "70px"
    // };

    return (
        <main>
            <h2>Enginners Day</h2>
            <p className={"blue-txt"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita ut delectus non sit odit quam eius ratione cumque ab reiciendis blanditiis quibusdam, alias itaque quas mollitia voluptate, nesciunt temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita ut delectus non sit odit quam eius ratione cumque ab reiciendis blanditiis quibusdam, alias itaque quas mollitia voluptate, nesciunt temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita ut delectus non sit odit quam eius ratione cumque ab reiciendis blanditiis quibusdam, alias itaque quas mollitia voluptate, nesciunt temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita ut delectus non sit odit quam eius ratione cumque ab reiciendis blanditiis quibusdam, alias itaque quas mollitia voluptate, nesciunt temporibus.</p>
            <p 
                // className={"large-txt"} // OLD WAY
                className={styles.largeTxt}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita ut delectus non sit odit quam eius ratione cumque ab reiciendis blanditiis quibusdam, alias itaque quas mollitia voluptate, nesciunt temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita ut delectus non sit odit quam eius ratione cumque ab reiciendis blanditiis quibusdam, alias itaque quas mollitia voluptate, nesciunt temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita ut delectus non sit odit quam eius ratione cumque ab reiciendis blanditiis quibusdam, alias itaque quas mollitia voluptate, nesciunt temporibus.
            </p>
        </main>
    )
};

export default Content;