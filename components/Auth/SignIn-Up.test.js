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