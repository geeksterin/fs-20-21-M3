import styles from "./CardList.module.css";
import Card from "../Card/Card";
import { useContext, useRef, useState } from "react";
import { TrelloContext } from "../../App";
import { useDrop } from "react-dnd";

const CardList = ({ title, id }) => {
    const trelloCtx = useContext(TrelloContext);

    const [properties, ref] = useDrop({
        accept: "CARD",
        drop: (item) => {
            // Dispatch the action to move the item from one list to another
            /**
             * item.id => source list
             * destination list => id
             */
            trelloCtx.dispatch({
                type: "MOVE_ITEM",
                payload: {
                    item,
                    destinationList: id
                }
            })
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            abcd: true
        }),
    });


    // console.log(trelloCtx)

    const [showAddCardBox, setAddCardBox] = useState(false);
    const textBoxRef = useRef(null);

    const onAddCardClick = () => {
        setAddCardBox(true);
    };

    const onCancelClick = () => {
        setAddCardBox(false);
    };

    const onAddClick = () => {
        const task = textBoxRef.current.value;
        trelloCtx.dispatch({
            type: "ADD_ITEM",
            payload: {
                data: task,
                listName: id
            }
        });
    };

    return (
        <div ref={ref} className={styles.container}>
            <h3>{title}</h3>
            {/* Cards list here */}
            {
                trelloCtx.state[id].map(data => <Card id={id} key={data} title={data} />)
                // trelloCtx.state.todoList
                // trelloCtx.state.inProgressList
                // trelloCtx.state.completedList
            }

            {
                showAddCardBox ? (
                    <div>
                        <textarea ref={textBoxRef} />
                        <button onClick={onAddClick}>Add</button>
                        <button onClick={onCancelClick}>Cancel</button>
                    </div>
                ) : (
                    <span onClick={onAddCardClick}>+ Add another card</span>
                )
            }
        </div>
    )
};

export default CardList;