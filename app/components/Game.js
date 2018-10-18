import React from "react";
import GameWindow from "./GameWindow";
import { connect } from "react-redux";
import * as constants from "../constants";
import * as actions from "../actions";
import * as Animatable from "react-native-animatable";
import GameOver from "./GameOver";
import { View } from "react-native";

class Game extends React.Component {
  componentDidMount() {
    this.props.getSurvivalEvents(0);
  }
  demonGamble() {
    let notice = Math.floor(Math.random() * 2);
    if (notice) {
      alert("Демон заметил ваше присутсвие! Все ваши деньги пропали :(");
      return this.props.changeMONEY(-this.props.MONEY);
    }
    alert("Демон продолжает спать. +2 денег");
    return this.props.changeMONEY(2);
  }
  render() {
    const {
      mainEvents,
      survivalEvents,
      HP,
      AGE,
      MONEY,
      error,
      changeAGE,
      changeHP,
      changeMONEY,
      resetGame,
      currentSurvivalEvent
    } = this.props;
    // Game oVer Logic
    if (HP <= 0 || MONEY < 0) {
      return (
        <GameOver
          dispatchReset={resetGame}
          message="Вы погибли. Или из-за долгов или из-за здоровья"
        />
      );
    }
    if (HP > 100 || MONEY > 10000) {
      return (
        <GameOver
          dispatchReset={resetGame}
          message="У вас слишком много всего! Так не пойдет!"
        />
      );
    }
    let event = mainEvents[Math.floor(AGE)];
    if (!event) {
      return (
        <GameOver
          dispatchReset={resetGame}
          message={`Вы победили. Вы прожили: ${Math.floor(
            AGE
          )} лет. Заработали: ${MONEY}$. Нажмите ниже, чтобы начать заново!`}
        />
      );
    }
    const currentMonth = (AGE - Math.floor(AGE)) * 10;

    if (currentMonth === 0) {
      let dispatchFirst =
        event.answers[0].reward.effect === "HP" ? changeHP : changeMONEY;
      let dispatchSecond =
        event.answers[1].reward.effect === "HP" ? changeHP : changeMONEY;

      return (
        <View>
          <View>
            <GameWindow
              event={event}
              dispatchFirst={dispatchFirst}
              dispatchSecond={dispatchSecond}
              dispatchAge={changeAGE.bind(null, AGE + 0.1)}
              MONEY={MONEY}
              HP={HP}
              AGE={Math.floor(AGE)}
              demonGamble={this.demonGamble.bind(this)}
            />
          </View>

          {error && (
            <Text style={{ color: "red" }}>Uh oh - something went wrong!</Text>
          )}
        </View>
      );
    }
    event = survivalEvents[currentSurvivalEvent];
    if (!event) {
      return <View>Loading...</View>;
    }

    let dispatchFirst = event.effect === "HP" ? changeHP : changeMONEY;
    let dispatchSecond = event.effect === "HP" ? changeHP : changeMONEY;
    //renderitj gamewindow с текущим survival ивентом из currentEvent
    return (
      <View className="Game">
        <View>
          <GameWindow
            dispatchFirst={dispatchFirst}
            dispatchSecond={dispatchSecond}
            dispatchAge={changeAGE.bind(null, AGE + 0.1)}
            event={event}
            MONEY={MONEY}
            HP={HP}
            AGE={Math.floor(AGE)}
            demonGamble={this.demonGamble.bind(this)}
          />
        </View>

        {error && (
          <Text style={{ color: "red" }}>Uh oh - something went wrong!</Text>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    HP: state.HP,
    MONEY: state.MONEY,
    AGE: state.AGE,
    survivalEvents: state.survivalEvents.events,
    currentSurvivalEvent: state.survivalEvents.currentSurvivalEvent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSurvivalEvents: age =>
      dispatch({ type: constants.API_CALL_REQUEST_SURVIVAL, payload: { age } }),
    changeAGE: age => dispatch(actions.changeAGE(age)),
    changeHP: hp => dispatch(actions.changeHP(hp)),
    changeMONEY: money => dispatch(actions.changeMONEY(money)),
    resetGame: () => dispatch(actions.resetGame())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
