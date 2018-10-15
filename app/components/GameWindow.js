import React from "react";
import hero from "../images/characters/2.png";
import devil from "../images/monster/devil.png";
import { View, Image, Button, Text } from "react-native";

class GameWindow extends React.Component {
  render() {
    const { event } = this.props;
    return (
      <View>
        <Text className="GameWindow__name">{event.name}</Text>
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
        />
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
        />
        <Text>HP: {this.props.HP}</Text>
        <Text>MONEY: {this.props.MONEY}</Text>
      </View>
    );
  }
}
export default GameWindow;
