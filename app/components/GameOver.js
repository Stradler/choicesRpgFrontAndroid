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
        <View>
          <Text
            style={{
              fontSize: 25,
              marginBottom: 10,
              color: "black",
              textAlign: "center"
            }}
            typing={1}
            maxDelay={50}
          >
            <TypeWriter typing={1} maxDelay={50}>
              {props.message}
            </TypeWriter>
          </Text>
        </View>
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
