/**********OLD WAY OF REACT BELOW */

// const rootDiv = document.getElementById("root");


// // const h1 = document.createElement("h1")
// // h1.classList.add("h1-heading")
// // h1.innerText = "Welcome to ReactJS";
// // rootDiv.append(h1);


// const h1React = React.createElement("h1", { className: "h1-heading" }, "Welcome to ReactJS");
// const div = React.createElement("div", null, "Div from react")
// const root = ReactDOM.createRoot(rootDiv)
// root.render(div)


/************NEW WAY OF REACT BELOW */



const MyReactApp = () => { // React functional Component
    let name = "John Smith";
    let age = 50;
    let address = `123, ABC Street, NJ`
    return (
        <div>
            <div id="myDiv" className="color-blue">
                This is a div created using ReactJS
                <p>alajds lfkjasdkl fjdlfk jsd asdf</p>
                <h1>test heading</h1>
                <img />
                <span>alsd jflksdj flkasd</span>
            </div>
            <div className="card">
                <img src="" />
                <h2>Name: {name}</h2>
                <span>Age: {age}</span>
                <br />
                <span>Address: {address}</span>
            </div>
            <div>
                this is second div
                <ul>
                    <li>A</li>
                    <li>B</li>
                </ul>
            </div>
        </div>
    )
};

const rootDiv = document.getElementById("root");
const root = ReactDOM.createRoot(rootDiv); // Virtual DOM / React DOM
root.render(
    // <MyReactApp></MyReactApp>
    <MyReactApp />
)