import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Auth from "./SignIn-Up";

describe("Auth Component", () => {
    test("render name Testing", () => {
        render(<Auth/>);
        const check = screen.getByText("Email address", { exact: false });
        expect(check).toBeInTheDocument();
    });

     test("renders Login if the user has not clicked signup Testing", () => {
       render(<Auth />);
       const check = screen.getByText("LOGIN");
       expect(check).toBeInTheDocument();
     });

     test("renders create new acc if the user has not clicked signup Testing", () => {
       render(<Auth />);
       const check = screen.getByText("Create new account", { exact: false });
       expect(check).toBeInTheDocument();
     });

     test("renders create new acc if the user has clicked signup Testing", () => {
       render(<Auth />);

       const buttonCheck = screen.getByText("Create new account"); 
       userEvent.click(buttonCheck);

       const check = screen.getByText("Sign Up", {exact: false});
       expect(check).toBeInTheDocument();
     });
});

describe("Auth Component test2", () => {
  test("render name Testing", () => {
    render(<Auth />);
    const check = screen.getByText("Password", { exact: false });
    expect(check).toBeInTheDocument();
  });

  test("render nav", () => {
    render(<Auth />);
    const check = screen.getByText("HOME");
    expect(check).toBeInTheDocument();
  });

  test("renders create new acc if the user has not clicked signup Testing", () => {
    render(<Auth />);
    const check = screen.getByText("PRODUCT", { exact: false });
    expect(check).toBeInTheDocument();
  });

  test("renders LOGIN if the user has clicked Login with existing account Testing", () => {
    render(<Auth />);

    const buttonCheck = screen.getByText("LOGIN");
    userEvent.click(buttonCheck);

    const check = screen.getByText("HOME", { exact: false });
    expect(check).toBeInTheDocument();
  });
});