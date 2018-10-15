import React from "react";
import {connect} from "react-redux"
const Login = props => {
  return (
    <form>
      <input type="text" />
      <input type="password" />
      <button>Login</button>
    </form>
  );
};

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
)(Login);
