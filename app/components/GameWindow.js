import React from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import "./GameWindow.scss";
import hero from "../images/characters/2.png";
import devil from "../images/monster/devil.png";

class GameWindow extends React.Component {
  render() {
    const { event } = this.props;
    return (
      <Grid className="GameWindow">
        <Row>
          <Col xs={4} lg={4} />
          <Col xs={4} lg={4}>
            <img className="GameWindow__demon" onClick={this.props.demonGamble} alt="devil" src={devil} />
          </Col>

          <Col xs={4} lg={4}>
            <p>{"<--- Не нажимай на него!"}</p>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col xs={4} lg={4} />
            <Col xs={4} lg={4}>
              <p className="GameWindow__name">{event.name}</p>
            </Col>
            <Col xs={4} lg={4} />
          </Row>
          <Grid>
            <Row>
              <Col xs={3} lg={3} />
              <Col xs={2} lg={2}>
                <Button
                  bsSize="lg"
                  bsStyle="success"
                  onClick={() => {
                    this.props.dispatchAge();
                    if (event.effect) {
                      this.props.dispatchFirst(event.answers[0].power);
                    } else {
                      this.props.dispatchFirst(event.answers[0].reward.power);
                    }
                  }}
                >
                  {event.answers[0].answer_name}
                </Button>
              </Col>
              <Col xs={2} lg={2}>
                <img className="GameWindow__character" alt="hero" src={hero} />
              </Col>
              <Col xs={2} lg={2}>
                <Button
                  bsSize="lg"
                  bsStyle="warning"
                  onClick={() => {
                    this.props.dispatchAge();
                    if (event.effect) {
                      this.props.dispatchSecond(event.answers[1].power);
                    } else {
                      this.props.dispatchSecond(event.answers[1].reward.power);
                    }
                  }}
                >
                  {event.answers[1].answer_name}
                </Button>
              </Col>
              <Col xs={3} lg={3} />
            </Row>
          </Grid>
        </Row>
        <Row>
          <Col xs={4} lg={4}>

          </Col>
          <Col xs={4} lg={4}>
            <p className="GameWindow__stats">
              <span>HP: {this.props.HP}</span>, <span>MONEY: {this.props.MONEY}</span>
            </p>
          </Col>
          <Col xs={4} lg={4}>

          </Col>
        </Row>
      </Grid>
    );
  }
}
export default GameWindow;
