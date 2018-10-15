import React from "react";
import { Button, Text, View } from "react-native";
import {Actions} from "react-native-router-flux";

const Test = () => {
  return (
    <View>
      <Button title="Back" onPres={() => Actions.welcome()}/>
    </View>
  );
};
export default Test;
