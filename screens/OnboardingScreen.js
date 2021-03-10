import React from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 16 }} {...props}>
    <Text style={{ color: "#fff", fontSize: 16 }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: "#30bfbf",
          image: <Image source={require("../assets/onboarding-img1.png")} />,
          title: "Connect to the World",
          subtitle: "A New Way To Connect With The World",
        },
        {
          backgroundColor: "#1e90ff",
          image: <Image source={require("../assets/onboarding-img2.png")} />,
          title: "Share Your Favorites",
          subtitle: "Share Your Thoughts With Similar Kind of Peopler",
        },
        {
          backgroundColor: "#2ed573",
          image: <Image source={require("../assets/onboarding-img3.png")} />,
          title: "Become The Star",
          subtitle: "Let The Spot Light Capture You",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
