import React from "react";
import {View, Text, Button} from "react-native";
const GameOver = (props) => {
  return(
    <View>
      <Text>{props.message}</Text>
      <Button  title="Click here to start a new game!" onPress={props.dispatchReset}/>
    </View>
  );
}
export default GameOver;