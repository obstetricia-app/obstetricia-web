import React from "react";
import { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import LoginContentContainer from "./LoginContentContainer";
import LoginForm from "../form/LoginForm";
import ForgotPassword from "../forgotPassword/ForgotPassword";

describe("<LoginContentContainer />", () => {
  test("should be render LoginForm", () => {
    const wrapper = shallow(<LoginContentContainer />);
    expect(wrapper.find(LoginForm).length).toBe(1);
  });

  test("toggle show forgot password", async () => {
    const wrapper = mount(<LoginContentContainer />);
    act(() => {
      wrapper.find(LoginForm).props().onClickForgotPassword();
    });

    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 500);
    });

    act(() => {
      wrapper.update();
    });

    expect(wrapper.find(LoginForm).length).toBe(0);
    expect(wrapper.find(ForgotPassword).length).toBe(1);

    act(() => {
      wrapper.find(ForgotPassword).props().onClickGoBack();
    });

    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 500);
    });

    act(() => {
      wrapper.update();
    });

    expect(wrapper.find(LoginForm).length).toBe(1);
    expect(wrapper.find(ForgotPassword).length).toBe(0);
  });

  test("when isMobile show correct className", () => {
    const wrapper = mount(<LoginContentContainer isMobile />);
    const loginForm = wrapper.find(LoginForm);
    const loginFormContainer = wrapper.find({
      "data-testid": "loginFormContainer",
    });

    expect(loginForm.hasClass("loginFormInner")).toBeTruthy();
    expect(loginForm.hasClass("loginFormOuter")).toBeFalsy();

    expect(loginFormContainer.hasClass("loginFormContainerInner")).toBeTruthy();
    expect(loginFormContainer.hasClass("loginFormContainerOuter")).toBeFalsy();
  });

  test("when isMobile and forgotPassword show correct className", async () => {
    const wrapper = mount(<LoginContentContainer isMobile />);

    act(() => {
      wrapper.find(LoginForm).props().onClickForgotPassword();
    });

    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 500);
    });

    act(() => {
      wrapper.update();
    });

    const forgotContainer = wrapper.find({
      "data-testid": "forgotPasswordContainer",
    });

    expect(
      forgotContainer.hasClass("forgotPasswordContainerInner")
    ).toBeTruthy();
    expect(
      forgotContainer.hasClass("forgotPasswordContainerOuter")
    ).toBeFalsy();
  });
});
