import { useEffect } from "react";
import { useParams } from "react-router-dom";

const hotels = [
  {
    hotelId: 1,
    hotelName: "SinQ Prive",
    description: "This is Sinq Prive hotel in Goa",
  },
  {
    hotelId: 2,
    hotelName: "TreeHouse Neptune",
    description: "This is Tree house neptune hotel in goa",
  },
];

const HotelDetails = () => {
  const params = useParams();
  console.log(params.hotelId);
  const hotelDetails = hotels.find((data) => data.hotelId == params.hotelId);
  // console.log(hotelDetails);
  useEffect(() => {
    //https://jsonplaceholder.typicode.com/users/${params.id}
  },[]);
  return (
    <>
      <h2>Hotel Details screen</h2>
      {hotelDetails ? (
        <>
          {hotelDetails.hotelName}
          <p>{hotelDetails.description}</p>
        </>
      ) : (
        <h2>Hotel details with this id not found</h2>
      )}
    </>
  );
};

export default HotelDetails;
