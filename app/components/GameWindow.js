import React from "react";
import hero from "../images/characters/2.png";
import devil from "../images/monster/devil.png";
import { View, Dimensions } from "react-native";
import { Button, Text } from "native-base";
import { styles } from "./styles";
import * as Animatable from "react-native-animatable";

class GameWindow extends React.Component {
  render() {
    const { event } = this.props;
    return (
      <View style={styles.gamewindow}>
        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={{ textAlign: "center", fontSize: 30, marginBottom: 10 }}
        >
          {event.name}
        </Animatable.Text>
        <View style={{ flexDirection: "row" }}>
          <Button
            onPress={() => {
              this.props.dispatchAge();
              if (event.effect) {
                this.props.dispatchFirst(event.answers[0].power);
              } else {
                this.props.dispatchFirst(event.answers[0].reward.power);
              }
            }}
            title={event.answers[0].answer_name}
            style={{ marginRight: 20 }}
          >
            <Text>{event.answers[0].answer_name}</Text>
          </Button>
          <Button
            bsSize="lg"
            bsStyle="warning"
            onPress={() => {
              this.props.dispatchAge();
              if (event.effect) {
                this.props.dispatchSecond(event.answers[1].power);
              } else {
                this.props.dispatchSecond(event.answers[1].reward.power);
              }
            }}
            title={event.answers[1].answer_name}
          >
            <Text>{event.answers[1].answer_name}</Text>
          </Button>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 30,
            width: Dimensions.get("window").width
          }}
        >
          <Text>HP: {this.props.HP}</Text>
          <Text>Деньги: {this.props.MONEY}</Text>
        </View>
      </View>
    );
  }
}
export default GameWindow;
