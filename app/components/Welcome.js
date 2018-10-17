import React from "react";
import { version } from "../../app.json";
import { View } from "react-native";
import { Button, Text } from "native-base";
import { Actions } from "react-native-router-flux";

const Welcome = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 150
      }}
    >
      <Text
        style={{
          fontSize: 40
        }}
      >
        Choices Rpg
      </Text>
      <Text>
        v.
        {version}
      </Text>
      <View>
        <Button title="Play!" onPress={() => Actions.game()}>
          <Text>Играть!</Text>
        </Button>
      </View>
    </View>
  );
};
export default Welcome;
