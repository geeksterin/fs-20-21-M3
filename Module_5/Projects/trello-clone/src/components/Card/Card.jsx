import { useDrag } from "react-dnd";
import styles from "./Card.module.css"

const Card = ({ title, id }) => {
    const [properties, ref] = useDrag(() => ({
        type: "CARD",
        item: { title, id },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
            background: monitor.isDragging() ? "green" : "aqua"
        })
    }), []);
    console.log(properties)
    return (
        <div ref={ref} style={{ opacity: properties.opacity, background: properties.background }} className={styles.container}>
            <p>{title}</p>
        </div>
    )
};

export default Card;