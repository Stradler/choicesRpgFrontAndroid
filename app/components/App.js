import React from "react";
import { Scene, Router, Drawer, Actions } from "react-native-router-flux";
import Welcome from "./Welcome";
import Game from "./Game";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome5";
import getTheme from "./native-base-theme/components";
import commonColor from "./native-base-theme/variables/commonColor";
import CustomForm from "./Form";
import {
  Container,
  Footer,
  Text,
  Header,
  Body,
  Title,
  Button,
  Content,
  StyleProvider,
  Spinner
} from "native-base";
import { FlatList } from "react-native";
const ReduxRouter = connect()(Router);

class DrawerList extends React.Component {
  render() {
    return (
      <FlatList
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 30
        }}
        data={[
          { key: "welcome", name: "Домой", icon: "home" },
          { key: "game", name: "Играть", icon: "play" }
        ]}
        renderItem={({ item }) => (
          <Button
            style={{ marginBottom: 20 }}
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

const Login = props => {
  if (props.token && props.token != "lel") {
    return Actions.welcome();
  }
  if (props.token === "lel")
    return (
      <CustomForm
        errorMessage={true}
        formAction={props.loginUser}
        buttonText="Sign In"
      />
    );

  return <CustomForm formAction={props.loginUser} buttonText="Sign In" />;
};

const Signup = props => {
  if (props.token && props.token != "lel") {
    return Actions.welcome();
  }
  if (props.token === "lel") {
    return (
      <CustomForm
        errorMessage={true}
        formAction={props.signupUser}
        buttonText="Sign Up"
      />
    );
  }
  return <CustomForm formAction={props.signupUser} buttonText="Sign Up" />;
};
class App extends React.Component {
  render() {
    console.log(this.props);
    const { events, error, fetching, token } = this.props;
    if (!events || events.length === 0) {
      setTimeout(() => {
        this.props.onRequestEvents();
      }, 3000);
      return (
        <Container>
          <Content>
            <Spinner />
          </Content>
        </Container>
      );
    }
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header style={{ height: 10, borderBottomColor: "white" }} />
          <ReduxRouter>
            <Drawer
              key="homeview"
              contentComponent={DrawerList}
              drawerIcon={<Icon name="eye" size={40} color="steelblue" />}
            >
              <Scene key="root" hideNavBar={false}>
                <Scene
                  key="welcome"
                  component={() => <Welcome token={token} />}
                  hideNavBar={false}
                />
                <Scene
                  key="login"
                  component={() => (
                    <Login loginUser={this.props.loginUser} token={token} />
                  )}
                  hideNavBar={false}
                />
                <Scene
                  key="signup"
                  component={() => (
                    <Signup signupUser={this.props.signupUser} token={token} />
                  )}
                  hideNavBar={false}
                />
                <Scene
                  key="game"
                  component={() => (
                    <Game
                      mainEvents={events}
                      error={error}
                      fetching={fetching}
                    />
                  )}
                />
              </Scene>
            </Drawer>
          </ReduxRouter>
          <Footer>
            <Text>2018</Text>
          </Footer>
        </Container>
      </StyleProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    events: state.mainEvents,
    error: state.error,
    token: state.token,
    userId: state.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestEvents: () => dispatch({ type: "API_CALL_REQUEST_MAIN" }),
    loginUser: (login, password) =>
      dispatch({ type: "API_CALL_LOGIN", payload: { login, password } }),
    signupUser: (login, password) =>
      dispatch({ type: "API_CALL_SIGNUP", payload: { login, password } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
