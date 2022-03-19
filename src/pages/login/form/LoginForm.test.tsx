import React from "react";
import { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import LoginForm from "./LoginForm";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";

describe("LoginForm", () => {
  test("should render a button with Entrar", () => {
    const wrapper = shallow(<LoginForm onClickForgotPassword={() => ({})} />);
    expect(wrapper.find(Button).length).toBe(1);
    expect(wrapper.find(Button).prop("name")).toBe("Entrar");
    expect(wrapper.find(Button).prop("isSubmit")).toBeFalsy();
  });

  test("should render two Inputs", () => {
    const wrapper = shallow(<LoginForm onClickForgotPassword={() => ({})} />);
    expect(wrapper.find(Input).length).toBe(2);
    expect(wrapper.find(Input).get(0).props.type).toBe("text");
    expect(wrapper.find(Input).get(0).props.placeholder).toBe(
      "Digite seu usuário"
    );
    expect(wrapper.find(Input).get(0).props.label).toBe("Usuário");
    expect(wrapper.find(Input).get(0).props.id).toBe("user");

    expect(wrapper.find(Input).get(1).props.type).toBe("password");
    expect(wrapper.find(Input).get(1).props.placeholder).toBe(
      "Digite sua senha"
    );
    expect(wrapper.find(Input).get(1).props.label).toBe("Senha");
    expect(wrapper.find(Input).get(1).props.id).toBe("password");
  });

  test("should disable button whether some input hasnt values", () => {
    const wrapper = shallow(<LoginForm onClickForgotPassword={() => ({})} />);
    const button = wrapper.find(Button);

    expect(button.props().disabled).toBeTruthy();
  });

  test("should disable button whether username input hasnt values", () => {
    const wrapper = shallow(<LoginForm onClickForgotPassword={() => ({})} />);
    const inputUsername = wrapper.find(Input).at(0);

    act(() => {
      inputUsername.props().onChange("Ricardo");
    });

    const button = wrapper.find(Button);
    expect(button.props().disabled).toBeTruthy();
  });

  test("should disable button whether password input hasnt values", () => {
    const wrapper = shallow(<LoginForm onClickForgotPassword={() => ({})} />);
    const inputPassword = wrapper.find(Input).at(1);

    act(() => {
      inputPassword.props().onChange("1234");
    });

    const button = wrapper.find(Button);
    expect(button.props().disabled).toBeTruthy();
  });
});
