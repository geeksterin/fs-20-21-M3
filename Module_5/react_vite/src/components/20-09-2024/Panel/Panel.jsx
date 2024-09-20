import { useState } from "react";

// Panel Id    Expanded Panel Id
// 1       ===     1
// 1       ===     2
// 1       ===     3
const Panel = (props) => {
    return (
        <div className='panel'>
            <h3>Section</h3>
            {
                props.id === props.expandedPanelId ? // I'm expanded
                    (
                        <div>
                            {props.text}
                            <button onClick={() => {
                                props.handleBtnClick(props.id)
                            }}>-</button>
                        </div>
                    )
                    :
                    ( // I'm collapsed
                        <div>
                            {
                                props.text?.substring(0, 7)
                            }....
                            <button onClick={() => {
                                props.handleBtnClick(props.id)
                            }}>+</button>
                        </div>
                    )
            }
        </div>
    );
};

export default Panel;