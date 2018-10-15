import React from "react";
import { version } from "../../app.json";
import { Button, Text, View } from "react-native";
import {Actions} from "react-native-router-flux";

const Welcome = () => {
  return (
    <View style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    }
    }>
      <Text style={{
        fontSize: 40
      }}>Choices Rpg</Text>
      <Text>
        v.
        {version}
      </Text>
      <Button title="Play!" onPress={() => Actions.game()} />
    </View>
  );
};
export default Welcome;
