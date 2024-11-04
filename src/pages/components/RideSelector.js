import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);

  //   Get ride duration from mapbox api

  //   useEffect(() => {
  // template literal backticks

  //     fetch(
  //       `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]}, ${pickupCoordinates[1]}; ${dropoffCoordinates[0]}, ${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoidGhlZWtza2F0ZSIsImEiOiJjbTFkNGUyNDcyamZyMm1wemZ2dmh3NHhvIn0.iO_Lg1G4FdNJE7mAbyUp-w`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setRideDuration(data.routes[0].duration / 100);
  //       });
  //   }, [pickupCoordinates, dropoffCoordinates]);

  useEffect(() => {
    const fetchRideDuration = async () => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoidGhlZWtza2F0ZSIsImEiOiJjbTFkNGUyNDcyamZyMm1wemZ2dmh3NHhvIn0.iO_Lg1G4FdNJE7mAbyUp-w`
        );
        const data = await response.json();

        if (data.routes && data.routes.length > 0) {
          setRideDuration(data.routes[0].duration / 250); 
        } else {
          console.error("No routes found in response:", data);
        }
      } catch (error) {
        console.error("Error fetching ride duration:", error);
      }
    };

    if (pickupCoordinates && dropoffCoordinates) {
      fetchRideDuration();
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service> {car.service}</Service>
              <Time> 5 min away </Time>
            </CarDetails>
            <Price> {"$" + (rideDuration * car.multiplier).toFixed(2)} </Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const CarList = tw.div`

overflow-y-scroll`;

const CarImage = tw.img` h-14 mr-4`;

const Car = tw.div` flex p-4 items-center `;
const CarDetails = tw.div` flex-1 `;
const Service = tw.div` font-medium`;
const Time = tw.div` text-xs text-blue-500`;
const Price = tw.div` text-sm`;

const Title = tw.div`
    text-center text-gray-500 text-xs py-2 border-b
`;

const Wrapper = tw.div`
 flex flex-1 overflow-y-scroll flex-col
`;
