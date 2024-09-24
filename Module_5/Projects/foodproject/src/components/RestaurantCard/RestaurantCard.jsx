import styles from "./RestaurantCard.module.css";

const RestaurantCard = (props) => {
    // console.log(props)
    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.title}>
                    {props.name}
                </h3>
                <span>
                    {
                        [...new Array(5)].map((item, index) => {
                            return <i
                                key={"start_icon_"+index}
                                className={
                                    `fa-${parseInt(props.rating) >= index + 1 ? "solid" : "regular"
                                    } fa-star`
                                }
                            ></i>
                        })
                    }
                </span>
            </div>
            <i className="fa-solid fa-location-dot"></i>
            <span className={styles.address}>{props.address}</span>
            <div>
                {
                    `${props.outcode} ${props.postcode}`
                    // props.outcode
                }
                {
                    // props.postcode
                }
            </div>
            <div className={styles["cuisine-container"]}>
                <div>
                    <i className="fa-solid fa-utensils"></i>
                    <span className={styles.cuisine}>{props.type_of_food}</span>
                </div>
                <a href="/menu">Visit Menu</a>
            </div>

        </div>
    )
};

export default RestaurantCard;