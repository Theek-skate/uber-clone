import { useEffect, useState } from "react";

import localFont from "next/font/local";
import "tailwindcss/tailwind.css";
import tw from "tailwind-styled-components";
import Map from "./components/map";
import Link from "next/link";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

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
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photo: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}

        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name> {user && user.name}</Name>
            <UserImage
              src={user && user.photoUrl}
              onClick={() => signOut(auth)}
            />
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
 h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer
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
