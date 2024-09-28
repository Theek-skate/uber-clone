import { useEffect } from "react";

import localFont from "next/font/local";
import "tailwindcss/tailwind.css";
import tw from "tailwind-styled-components";
import Map from "./components/map";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}

        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Atheek Nazeer </Name>
            <UserImage src="https://media.licdn.com/dms/image/v2/C4D03AQFd7Q4KIIqxyA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1619523294597?e=1732752000&v=beta&t=ThFbMmjoa4H9Eup4CnA1Szzc4bF0nBojr4fxod-rJsc" />
          </Profile>
        </Header>

        {/* Action Buttons */}

        <ActionButtons>
          <Link
            href="/search"
            className=" flex flex-col bg-gray-200 text-black flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl"
          >
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>

          <Link
            href="/search"
            className=" flex flex-col bg-gray-200 text-black flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl"
          >
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
              Wheel
            </ActionButton>
          </Link>

          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>

        {/* Input Buttons */}

        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}
// The containers need flex to take up the whole screen which is assited by h-screen (100vh)
const Wrapper = tw.div`  
  flex flex-col bg-red-300 h-screen
`;
// The flex-1 for both map and actionItems gives them equal importance so they will be divided by half

const ActionItems = tw.div`
  bg-white flex-1 p-4
`;

const Header = tw.div`
 flex justify-between items-center
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
 flex items-center
`;

const Name = tw.div`
mr-4 w-20 text-black text-sm
`;

const UserImage = tw.img`
 h-12 w-12 rounded-full border-gray-200 p-px 
`;

const ActionButtons = tw.div`
  flex
`;
const ActionButton = tw.div`
    flex flex-col bg-gray-200 text-black flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
 `;

const ActionButtonImage = tw.img`
 h-3/5 
`;

const InputButton = tw.div`
  text-black h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;
