import React from "react";
import { version } from "../../app.json";
import { Button, Text, View } from "react-native";
import {Actions} from "react-native-router-flux";

const Welcome = () => {
  return (
    <View>
      <Text>Choices Rpg</Text>
      <Text>
        v.
        {version}
      </Text>
      <Button title="Play!" onPress={() => Actions.test()} />
    </View>
  );
};
export default Welcome;
