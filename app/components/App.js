import React from "react";
import { Scene, Router, Drawer, Actions } from "react-native-router-flux";
import Welcome from "./Welcome";
import Game from "./Game";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  Container,
  Footer,
  Text,
  Header,
  Body,
  Title,
  Button
} from "native-base";
import { FlatList } from "react-native";
import SideMenu from "react-native-side-menu";
const ReduxRouter = connect()(Router);

class DrawerList extends React.Component {
  render() {
    return (
      <FlatList
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        data={[
          { key: "welcome", name: "Home", icon: "home" },
          { key: "game", name: "Play", icon: "play" }
        ]}
        renderItem={({ item }) => (
          <Button
            style={{ marginBottom: 5 }}
            full
            onPress={() => Actions[item.key]()}
          >
            <Icon name={item.icon} color="white" />
            <Text>{item.name}</Text>
          </Button>
        )}
      />
    );
  }
}
class App extends React.Component {
  componentDidMount() {
    this.props.onRequestEvents();
  }
  render() {
    const { events, error, fetching } = this.props;
    return (
      <Container>
        <Header style={{ height: 10, borderBottomColor: "white" }} />

        <ReduxRouter>
          <Drawer
            key="homeview"
            contentComponent={DrawerList}
            drawerIcon={<Icon name="eye" size={40} color="steelblue" />}
          >
            <Scene key="root" hideNavBar={false}>
              <Scene key="welcome" component={Welcome} hideNavBar={false} />
              <Scene
                key="game"
                component={Game}
                mainEvents={events}
                error={error}
                fetching={fetching}
              />
            </Scene>
          </Drawer>
        </ReduxRouter>
        <Footer>
          <Text>2018</Text>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    events: state.mainEvents,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestEvents: () => dispatch({ type: "API_CALL_REQUEST_MAIN" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
