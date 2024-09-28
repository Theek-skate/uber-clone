import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGhlZWtza2F0ZSIsImEiOiJjbTFkNGUyNDcyamZyMm1wemZ2dmh3NHhvIn0.iO_Lg1G4FdNJE7mAbyUp-w";

const map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [79.8612, 6.9271],
      zoom: 12,
    });

    addToMap(map);
    
});

const addToMap = (map) => {

      const marker1 = new mapboxgl.Marker()
        .setLngLat([79.87514, 6.91907])
        .addTo(map);

  }
  return <Wrapper id="map"></Wrapper>;
};

export default map;

const Wrapper = tw.div`
    flex-1
`;
