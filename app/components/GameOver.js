import React from "react";
import { View } from "react-native";
import { Text, Button } from "native-base";
import { styles } from "./styles";
import * as Animatable from "react-native-animatable";
import TypeWriter from "react-native-typewriter";
class GameOver extends React.Component {
  componentDidMount() {
    this.view.lightSpeedIn(100);
  }
  render() {
    const props = this.props;
    return (
      <Animatable.View ref={ref => (this.view = ref)} style={styles.gamewindow}>
        <TypeWriter
          style={{ textAlign: "center", fontSize: 30, marginBottom: 10 }}
          typing={1}
          maxDelay={50}
        >
          {props.message}
        </TypeWriter>
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
