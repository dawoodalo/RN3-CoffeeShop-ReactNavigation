import React from "react";

// NativeBase Components
import { H2 } from "native-base";

// Component

const Profile = () => {
  return <H2 style={{ color: "white" }}>Username: NaserAldeen</H2>;
};
Profile.navigationOptions = ({ navigation }) => {
  return {
    title: "Profile"
  };
};

export default Profile;
