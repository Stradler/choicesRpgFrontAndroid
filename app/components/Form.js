import React from "react";
import { Form, Item, Input, Content, Button, Text } from "native-base";
import { Actions } from "react-native-router-flux";

class CustomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }
  render() {
    return (
      <Content>
        {this.props.errorMessage && <Text>Login or Password is wrong!</Text>}
        <Form>
          <Item>
            <Input
              onChangeText={text => {
                const state = this.state;
                this.setState({ ...state, login: text });
              }}
              value={this.state.login}
              placeholder="Username"
            />
          </Item>
          <Item last>
            <Input
              secureTextEntry={true}
              onChangeText={text => {
                const state = this.state;
                this.setState({ ...state, password: text });
              }}
              value={this.state.password}
              placeholder="Password"
            />
          </Item>
          <Button
            onPress={this.props.formAction.bind(
              null,
              this.state.login,
              this.state.password
            )}
          >
            <Text>{this.props.buttonText}</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}
export default CustomForm;

/* onPress={this.props.formAction.bind(
              null,
              this.state.login,
              this.state.password
            )} */
