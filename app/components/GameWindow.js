import React from "react";
import hero from "../images/characters/2.png";
import devil from "../images/monster/devil.png";
import { View, Dimensions } from "react-native";
import { Button, Text } from "native-base";
import { styles } from "./styles";
import * as Animatable from "react-native-animatable";

class GameWindow extends React.Component {
  constructor(props) {
    super(props);
    this.view = React.createRef();
    this.mounted = false;
  }
  componentDidMount() {
    this.mounted = true;
    this.view.lightSpeedIn(500);
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const {
      event,
      dispatchFirst,
      dispatchSecond,
      dispatchAge,
      HP,
      MONEY,
      AGE
    } = this.props;
    return (
      <Animatable.View style={styles.gamewindow} ref={el => (this.view = el)}>
        <Text style={{ flexBasis: 80 }}>Возраст: {AGE || "0"}</Text>
        <Text style={{ textAlign: "center", fontSize: 30, marginBottom: 10 }}>
          {event.name}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Button
            onPress={() => {
              let view = this.view;
              view.lightSpeedOut(500).then(() => {
                dispatchAge();
                if (event.effect) {
                  dispatchFirst(event.answers[0].power);
                } else {
                  dispatchFirst(event.answers[0].reward.power);
                }
                if (this.mounted) view.lightSpeedIn(500);
              });
            }}
            title={event.answers[0].answer_name}
            style={[{ marginRight: 20 }, styles.choiceButton]}
          >
            <Text style={styles.choiceButton__text}>
              {event.answers[0].answer_name}
            </Text>
          </Button>
          <Button
            style={styles.choiceButton}
            bsSize="lg"
            bsStyle="warning"
            onPress={() => {
              let view = this.view;
              view.lightSpeedOut(500).then(() => {
                dispatchAge();
                if (event.effect) {
                  dispatchSecond(event.answers[1].power);
                } else {
                  dispatchSecond(event.answers[1].reward.power);
                }
                if (this.mounted) view.lightSpeedIn(500);
              });
            }}
            title={event.answers[1].answer_name}
          >
            <Text style={styles.choiceButton__text}>
              {event.answers[1].answer_name}
            </Text>
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
          <Text>HP: {HP}</Text>
          <Text>Деньги: {MONEY}</Text>
        </View>
      </Animatable.View>
    );
  }
}
GameWindow = Animatable.createAnimatableComponent(GameWindow);

export default GameWindow;
