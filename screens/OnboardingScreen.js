import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Touchable,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 50 }} {...props}>
    <Text style={{ fontSize: 14 }}>Skip</Text>
  </TouchableOpacity>
);
const Next = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 50 }} {...props}>
    <Text style={{ fontSize: 14 }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 50 }} {...props}>
    <Text style={{ fontSize: 14 }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../Images/Slide1.jpg")} />,
          title: "Slide 1",
          subtitle: "Info 1",
        },
        {
          backgroundColor: "#696969",
          image: <Image source={require("../Images/Slide2.jpg")} />,
          title: "Slide 2",
          subtitle: "Info 2",
        },
        {
          backgroundColor: "#DC143C",
          image: <Image source={require("../Images/Slide3.png")} />,
          title: "Slide 2",
          subtitle: "Info 3",
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OnboardingScreen;
