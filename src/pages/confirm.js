import { useEffect } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Map from "./components/Map";

const confirm = () => {
  const getCoordinates = () => {
    const location = "Borella";
    fetch(`https://api.mapbox.com/search/geocode/v6/forward?q=${location}.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    getCoordinates()
  },[]) 


  return (
    <Wrapper>
      {/* Map  */}

      <Map />

      {/* Ride Container */}

      <RiderContainer>
        {/* Rider Selector */}

        {/* Confirm Button */}
      </RiderContainer>
    </Wrapper>
  );
};

export default confirm;

const Wrapper = tw.div`
    flex flex-col flex-1  h-screen
`;

const RiderContainer = tw.div`
    flex flex-1
`;
