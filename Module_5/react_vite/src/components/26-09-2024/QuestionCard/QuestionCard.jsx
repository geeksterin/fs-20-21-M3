import { Fragment } from "react";

import styles from "./QuestionCard.module.css";

const QuestionCard = ({
    difficulty,
    question,
    incorrect_answers,
    correct_answer,
    index
}) => {
    return (
        <div className={styles.container}>
            <p>Difficulty : {difficulty}</p>
            <p>{question}</p>
            <div>
                {
                    incorrect_answers.map((data, idx) => {
                        return <Fragment key={`${index}_${idx}`}>
                            {data}
                            <input name={`q_${index}`} type="radio" value={data} />
                        </Fragment>
                    })
                }
            </div>
        </div>
    )
};

export default QuestionCard;