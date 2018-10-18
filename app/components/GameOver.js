import React from "react";
import { View } from "react-native";
import { Text, Button } from "native-base";
import { styles } from "./styles";
import * as Animatable from "react-native-animatable";
class GameOver extends React.Component {
  componentDidMount() {
    this.view.lightSpeedIn(500);
  }
  render() {
    const props = this.props;
    return (
      <Animatable.View ref={ref => (this.view = ref)} style={styles.gamewindow}>
        <Text>{props.message}</Text>
        <View>
          <Button
            title="Click here to start a new game!"
            onPress={props.dispatchReset}
          >
            <Text>Начать заново!</Text>
          </Button>
        </View>
      </Animatable.View>
    );
  }
}
GameOver = Animatable.createAnimatableComponent(GameOver);
export default GameOver;
