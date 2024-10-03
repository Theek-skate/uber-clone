import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Map from "./components/Map";

const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = () => {
    const pickup = "Borella";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoidGhlZWtza2F0ZSIsImEiOiJjbTFkNGUyNDcyamZyMm1wemZ2dmh3NHhvIn0.iO_Lg1G4FdNJE7mAbyUp-w",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = () => {
    const dropoff = "Slave Island";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoidGhlZWtza2F0ZSIsImEiOiJjbTFkNGUyNDcyamZyMm1wemZ2dmh3NHhvIn0.iO_Lg1G4FdNJE7mAbyUp-w",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
       
        setDropoffCoordinates(data.features[0].center);
      });
  };

  // testing main branch
  useEffect(() => {
    getPickupCoordinates();
    getDropoffCoordinates();
  }, []);


  console.log(pickupCoordinates);
  console.log(dropoffCoordinates);

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

export default Confirm;

const Wrapper = tw.div`
    flex flex-col flex-1 h-screen bg-white`;
const RiderContainer = tw.div`
    flex flex-1 text-black  `;
