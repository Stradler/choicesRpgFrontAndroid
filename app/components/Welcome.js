import React from "react";
import { version } from "../../app.json";
import { View, Dimensions } from "react-native";
import { Button, Text, Content } from "native-base";
import { Actions } from "react-native-router-flux";
import { styles } from "./styles";

const Welcome = () => {
  return (
    <Content>
      <View style={styles.gamewindow}>
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
    </Content>
  );
};
export default Welcome;
