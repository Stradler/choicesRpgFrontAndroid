import React from "react";
import { View } from "react-native";
import { Text, Button } from "native-base";
import { styles } from "./styles";
const GameOver = props => {
  return (
    <View style={styles.gamewindow}>
      <Text>{props.message}</Text>
      <View>
        <Button
          title="Click here to start a new game!"
          onPress={props.dispatchReset}
        >
          <Text>Начать заново!</Text>
        </Button>
      </View>
    </View>
  );
};
export default GameOver;
