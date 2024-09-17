const Card = (props) => {
    return (
        <div style={{
            border: "2px solid black",
            width: "200px"
        }}>
            <img src={props.imgSrc} />
            <h3>{props.heading}</h3>
            <h3>Views : {props.views}</h3>
            <h3>Channel : {props.channelName}</h3>
        </div>
    )
};

export default Card;

// {
//     heading: "Video Title 1",
//     channelName: "Channel Name 1",
//     views: 1000000,
//     imgSrc: "https://example.com/video1.jpg"
//   },

// const sum = (properties) => {};
// sum(10,5)
// <Sum num1={10} num2={5} num3={12} num4={20} num5={50} />


// {
//     num1: 10,
//     num2: 5,
//     num3: 12,
//     num4: 20,
//     num5: 50
// }