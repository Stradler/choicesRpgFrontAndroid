import React from "react";
import { Scene, Router } from "react-native-router-flux";
import Welcome from "./Welcome";
import Game from "./Game";
import { connect } from "react-redux";
import { Container, Footer, Text, Header, Body, Title } from "native-base";
const ReduxRouter = connect()(Router);

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestEvents();
  }
  render() {
    const { events, error, fetching } = this.props;
    return (
      <Container>
        <Header>
          <Body>
            <Title>Choices</Title>
          </Body>
        </Header>
        <ReduxRouter>
          <Scene key="root" hideNavBar>
            <Scene key="welcome" component={Welcome} />
            <Scene
              key="game"
              component={Game}
              mainEvents={events}
              error={error}
              fetching={fetching}
            />
          </Scene>
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
