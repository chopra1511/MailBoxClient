import { render, screen } from "@testing-library/react";
import Auth from "./SignIn-Up";

describe("Auth Testing", () => {
    test("Dummy Testing", () => {
        render(<Auth/>);
        const check = screen.getByText("Email address", { exact: false });
        expect(check).toBeInTheDocument();
    })
})