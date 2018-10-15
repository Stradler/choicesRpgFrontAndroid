import React from "react";
import {Panel, Grid} from "react-bootstrap";
const GameOver = (props) => {
  return(
    <Grid>
    <Panel>
      <Panel.Heading>{props.message}</Panel.Heading>
      <Panel.Body onClick={props.dispatchReset}>Click here to start a new game!</Panel.Body>
    </Panel>
    </Grid>
  );
}
export default GameOver;