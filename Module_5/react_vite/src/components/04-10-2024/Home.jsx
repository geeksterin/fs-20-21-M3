import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    // https://jsonplaceholder.typicode.com/users
  },[]);
  return (
    <div>
      <h2>This is home</h2>
      <Link to="/hotel/1">
        <div
          style={{
            width: "200px",
            boxShadow: "3px 4px 4px grey",
          }}
        >
          <h1>Hotel 1</h1>
        </div>
      </Link>

      <Link to="/hotel/2">
        <div
          style={{
            width: "200px",
            boxShadow: "3px 4px grey",
          }}
        >
          <h1>Hotel 2</h1>
        </div>
      </Link>
    </div>
  );
};

export default Home;
