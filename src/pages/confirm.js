import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import { useRouter } from "next/router";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  const getPickupCoordinates = (pickup) => {
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

  const getDropoffCoordinates = (dropoff) => {
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
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      {/* Map  */}

      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />

      {/* Ride Container */}

      <RiderContainer>
        {/* Rider Selector */}

        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />

        {/* Confirm Button */}

        <ConfirmButtonContainer>
          <ConfirmButton>Confirm Uber X</ConfirmButton>
        </ConfirmButtonContainer>
      </RiderContainer>
    </Wrapper>
  );
};

export default Confirm;

const ButtonContainer = tw.div`
  rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`;
const BackButton = tw.img`
  h-12 object-contain 
`;

const ConfirmButtonContainer = tw.div`
  border-t-2
`;

const ConfirmButton = tw.div`
  bg-black text-white my-4 mx-4  py-4 text-center text-xl
`;

const Wrapper = tw.div`
  flex flex-col flex-1  h-screen bg-white overflow-y-scroll`;

const RiderContainer = tw.div`
  flex flex-1 text-black flex-col h-1/2 `;
