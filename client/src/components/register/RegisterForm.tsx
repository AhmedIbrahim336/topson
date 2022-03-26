import React, { Component } from "react";
import Button from "../common/Button";
import TextField from "../common/TextField";
import { connect } from "react-redux";
import { userRegisterAction } from "../../actions/userActions";

type State = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

type Props = {
  userRegisterAction(data: State): Promise<void>;
};

export class RegisterForm extends Component<Props, State> {
  state: State = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  onUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  onSubmit() {
    this.props.userRegisterAction(this.state);
  }

  render() {
    return (
      <div className="w-96 bg-white px-8 py-10 rounded-lg shadow-2xl">
        <div className="mb-6">
          <TextField
            name="firstName"
            value={this.state.firstName}
            onChange={this.onUpdate.bind(this)}
            placeholder="First Name"
          />
        </div>
        <div className="mb-6">
          <TextField
            name="lastName"
            value={this.state.lastName}
            onChange={this.onUpdate.bind(this)}
            placeholder="Last Name"
          />
        </div>
        <div className="mb-6">
          <TextField
            name="email"
            value={this.state.email}
            onChange={this.onUpdate.bind(this)}
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <TextField
            name="password"
            value={this.state.password}
            onChange={this.onUpdate.bind(this)}
            placeholder="Password"
            isPassword
          />
        </div>
        <div className="mb-6">
          <TextField
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            onChange={this.onUpdate.bind(this)}
            placeholder="Password Confirmation"
            isPassword
          />
        </div>

        <div className="mb-4">
          <Button onClick={this.onSubmit.bind(this)} primary>
            Register
          </Button>
        </div>
        <Button onClick={() => {}}>Login</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, { userRegisterAction })(RegisterForm);
